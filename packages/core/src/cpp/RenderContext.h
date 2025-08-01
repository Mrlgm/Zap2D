#ifndef ZAP2D_RENDER_CONTEXT_H
#define ZAP2D_RENDER_CONTEXT_H

#include <emscripten/bind.h>
#include <iostream>

// Basic rendering context
class RenderContext {
private:
    int width;
    int height;

public:
    RenderContext(int w, int h);
    
    void clear();
    void render();
    
    int getWidth() const;
    int getHeight() const;
};



#endif // ZAP2D_RENDER_CONTEXT_H