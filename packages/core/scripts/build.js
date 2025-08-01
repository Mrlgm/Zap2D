const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Create dist directory if it doesn't exist
const distDir = path.join(__dirname, '../dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Emscripten build command
const buildCmd = `
emcc \
  src/zap2d.cpp \
  -o dist/zap2d-core.js \
  -s EXPORT_NAME="Zap2D" \
  -s MODULARIZE=1 \
  -s EXPORTED_RUNTIME_METHODS="['ccall', 'cwrap']" \
  -s EXPORTED_FUNCTIONS="['_main']" \
  -s ENVIRONMENT="web" \
  -s USE_ES6_IMPORT_META=0 \
  -s EXPORT_ES6=1 \
  -s WASM=1 \
  -s ALLOW_MEMORY_GROWTH=1 \
  --bind
`;

console.log('Building WebAssembly module...');
execSync(buildCmd, { cwd: path.join(__dirname, '..'), stdio: 'inherit' });
console.log('WebAssembly module built successfully!');