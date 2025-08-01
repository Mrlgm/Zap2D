const { default: createModule, add, RenderContext } = require('./dist/index.js');

// Initialize the module
createModule().then((module) => {
  // Test the add function
  const result = add(5, 3);
  console.log('5 + 3 =', result);
  
  // Test RenderContext class
  const ctx = new RenderContext(800, 600);
  ctx.clear();
  ctx.render();
  console.log('Width:', ctx.getWidth());
  console.log('Height:', ctx.getHeight());
});