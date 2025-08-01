const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Create dist directory if it doesn't exist
const distDir = path.join(__dirname, '../dist/wasm');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Emscripten build command
const buildCmd = `
em++ \
  src/cpp/zap2d.cpp \
  -o dist/wasm/index.js \
  --emit-tsd index.d.ts \
  -s EXPORT_NAME="Zap2D" \
  -s MODULARIZE=1 \
  -s EXPORTED_RUNTIME_METHODS="['ccall', 'cwrap']" \
  -s ENVIRONMENT="node,web" \
  -s EXPORT_ES6=1 \
  -s WASM=1 \
  -s ALLOW_MEMORY_GROWTH=1 \
  --bind
`;

console.log('Building WebAssembly module...');
execSync(buildCmd, { cwd: path.join(__dirname, '..'), stdio: 'inherit' });
console.log('WebAssembly module built successfully!');