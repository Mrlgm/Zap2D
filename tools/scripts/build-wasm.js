const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Get the package name from the working directory
const packageName = path.basename(process.cwd());
console.log(`Building WebAssembly module: ${packageName}`);

// Create dist directory if it doesn't exist
const distDir = path.join(process.cwd(), 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Check if there's a cpp directory with source files
const cppDir = path.join(process.cwd(), 'src', 'cpp');
if (!fs.existsSync(cppDir) || fs.readdirSync(cppDir).length === 0) {
  console.log(`No C++ source files found in ${cppDir}, skipping WebAssembly build`);
  process.exit(0);
}

// Try to load emscripten config if it exists
let emscriptenConfig = {};
const configPath = path.join(process.cwd(), 'emscripten.config.js');
if (fs.existsSync(configPath)) {
  emscriptenConfig = require(configPath);
}

// Set default values for config
const outputConfig = emscriptenConfig.output || {};
const jsFilename = outputConfig.jsFilename || 'index.js';
const wasmFilename = outputConfig.wasmFilename || 'index.wasm';
const dtsFilename = outputConfig.dtsFilename || 'index.d.ts';

const memoryConfig = emscriptenConfig.memory || {};
const initialMemory = memoryConfig.initial || 16 * 1024 * 1024; // 16MB
const maxMemory = memoryConfig.maximum || 1024 * 1024 * 1024; // 1GB
const allowMemoryGrowth = memoryConfig.allowGrowth !== undefined ? memoryConfig.allowGrowth : true;

const optimizationConfig = emscriptenConfig.optimization || {};
const optimizationLevel = optimizationConfig.level !== undefined ? optimizationConfig.level : 3;
const shrinkLevel = optimizationConfig.shrink !== undefined ? optimizationConfig.shrink : 3;
const debug = optimizationConfig.debug || false;

// Export settings
const exportConfig = emscriptenConfig.export || {};
const exportFunctions = exportConfig.functions || ['_malloc', '_free'];
const exportClasses = exportConfig.classes || [];

// Build export flags
const exportFlags = [];
// We don't need to manually specify EXPORTED_FUNCTIONS as embind should handle this automatically
// if (exportFunctions.length > 0) {
//   exportFlags.push(`-s EXPORTED_FUNCTIONS='[${exportFunctions.map(func => `"${func}"`).join(',')}]'`);
// }

exportClasses.forEach(cls => {
  exportFlags.push(`-s EXPORTED_CLASSES=${cls}`);
});

// Build the Emscripten command
const emccCmd = [
  'em++',
  `-O${optimizationLevel}`,
  `--bind`,
  `-s INITIAL_MEMORY=${initialMemory}`,
  `-s ALLOW_MEMORY_GROWTH=${allowMemoryGrowth ? 1 : 0}`,
  `-s MAXIMUM_MEMORY=${maxMemory}`,
  `-s MODULARIZE=1`,
  `-s EXPORT_NAME="Zap2D_${packageName}"`,
  `-s DISABLE_EXCEPTION_CATCHING=0`,
  `-std=c++17`,
  `-Wno-c++20-extensions`,
  `-I/opt/homebrew/Cellar/emscripten/4.0.11/libexec/cache/sysroot/include`,
  `-o dist/${jsFilename}`,
  ...exportFlags,
  ...(debug ? ['-g'] : []),
  ...getCppSourceFiles()
].join(' ');

console.log('Executing Emscripten build command...');
execSync(emccCmd, { stdio: 'inherit' });

console.log(`WebAssembly module built successfully: ${packageName}`);

// Helper function to get all C++ source files
function getCppSourceFiles() {
  const files = [];
  const cppExtensions = ['.cpp', '.cc', '.cxx'];
  
  function walkDir(dir) {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        walkDir(fullPath);
      } else if (stat.isFile()) {
        const ext = path.extname(item).toLowerCase();
        // Skip test files
        if (cppExtensions.includes(ext) && !item.includes('test')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  walkDir(cppDir);
  return files;
}