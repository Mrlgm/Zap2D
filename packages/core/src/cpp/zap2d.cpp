#include <emscripten.h>
#include <emscripten/bind.h>
#include <iostream>

// Basic rendering context
class RenderContext {
private:
    int width;
    int height;

public:
    RenderContext(int w, int h) : width(w), height(h) {}

    void clear() {
        // Clear the rendering context
        std::cout << "Clearing render context: " << width << "x" << height << std::endl;
    }

    void render() {
        // Perform rendering
        std::cout << "Rendering frame" << std::endl;
    }

    int getWidth() const { return width; }
    int getHeight() const { return height; }
};

// Simple addition function
int add(int a, int b) {
    return a + b;
}

// Simple multiplication function
int multiply(int a, int b) {
    return a * b;
}

// Expose classes and functions to JavaScript
EMSCRIPTEN_BINDINGS(zap2d_core) {
    emscripten::class_<RenderContext>("RenderContext")
        .constructor<int, int>()
        .function("clear", &RenderContext::clear)
        .function("render", &RenderContext::render)
        .function("getWidth", &RenderContext::getWidth)
        .function("getHeight", &RenderContext::getHeight);
    
    // Export the add function
    emscripten::function("add", &add);
    
    // Export the multiply function
    emscripten::function("multiply", &multiply);
}