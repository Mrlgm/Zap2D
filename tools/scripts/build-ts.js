const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Get the package name from the working directory
const packageName = path.basename(process.cwd());
console.log(`Building TypeScript for module: ${packageName}`);

// Create dist directory if it doesn't exist
const distDir = path.join(process.cwd(), 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Check if there's a ts directory with source files
const tsDir = path.join(process.cwd(), 'ts');
if (!fs.existsSync(tsDir) || fs.readdirSync(tsDir).length === 0) {
  console.log(`No TypeScript source files found in ${tsDir}, skipping TypeScript build`);
  process.exit(0);
}

// Try to load tsconfig if it exists
const tsconfigPath = path.join(process.cwd(), 'tsconfig.json');
let tsconfig = {};
if (fs.existsSync(tsconfigPath)) {
  tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf8'));
}

// Build the TypeScript compilation command
const tscCmd = [
  'tsc',
  '--project', tsconfigPath,
  '--outDir', 'dist'
].join(' ');

console.log('Executing TypeScript compilation command...');

try {
  execSync(tscCmd, { stdio: 'inherit' });
  console.log(`TypeScript compiled successfully for ${packageName}`);
} catch (error) {
  console.error(`Failed to compile TypeScript for ${packageName}:`, error.message);
  process.exit(1);
}