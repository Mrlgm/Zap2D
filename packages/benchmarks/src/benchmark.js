const { initialize, Zap2DRenderer } = require('@zap2d/core');

// Simple benchmark suite
async function runBenchmark() {
  // Initialize the WebAssembly module
  await initialize();
  
  console.log('Starting benchmark...');
  
  // Benchmark creating renderers
  console.time('Create 1000 Renderers');
  const renderers = [];
  for (let i = 0; i < 1000; i++) {
    renderers.push(new Zap2DRenderer(800, 600));
  }
  console.timeEnd('Create 1000 Renderers');
  
  // Benchmark clearing renderers
  console.time('Clear 1000 Renderers');
  for (const renderer of renderers) {
    renderer.clear();
  }
  console.timeEnd('Clear 1000 Renderers');
  
  // Benchmark rendering
  console.time('Render 1000 Renderers');
  for (const renderer of renderers) {
    renderer.render();
  }
  console.timeEnd('Render 1000 Renderers');
  
  console.log('Benchmark completed.');
}

runBenchmark().catch(console.error);