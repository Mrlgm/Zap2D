#include "RenderContext.h"
#include <iostream>

int main() {
    // Create a render context
    RenderContext context(800, 600);
    
    // Test the context
    std::cout << "Render context created with dimensions: " 
              << context.getWidth() << "x" << context.getHeight() << std::endl;
    
    // Clear and render
    context.clear();
    context.render();
    
    return 0;
}