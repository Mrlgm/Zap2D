// Emscripten configuration for Zap2D core module
module.exports = {
  // Output settings
  output: {
    // Name of the generated JavaScript file
    jsFilename: 'index.js',
    // Name of the generated WebAssembly file
    wasmFilename: 'index.wasm',
    // Name of the generated TypeScript definition file
    dtsFilename: 'index.d.ts'
  },
  
  // Memory settings
  memory: {
    // Initial memory size (in bytes)
    initial: 16 * 1024 * 1024, // 16MB
    // Maximum memory size (in bytes)
    maximum: 1024 * 1024 * 1024, // 1GB
    // Allow memory growth
    allowGrowth: true
  },
  
  // Optimization settings
  optimization: {
    // Optimization level (0-3)
    level: 3,
    // Shrink level (0-3)
    shrink: 3,
    // Enable debug information
    debug: false
  },
  
  // Export settings
  export: {
    // Exported functions
    functions: [
      '_malloc',
      '_free',
      '_add',
      '_multiply'
    ]
  }
};