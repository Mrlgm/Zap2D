#include "RenderContext.h"

RenderContext::RenderContext(int w, int h) : width(w), height(h) {}

void RenderContext::clear() {
    // Clear the rendering context
    std::cout << "Clearing render context: " << width << "x" << height << std::endl;
}

void RenderContext::render() {
    // Perform rendering
    std::cout << "Rendering frame" << std::endl;
}

int RenderContext::getWidth() const { 
    return width; 
}

int RenderContext::getHeight() const { 
    return height; 
}