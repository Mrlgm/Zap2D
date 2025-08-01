#!/bin/bash

em++ -std=c++17 -I/opt/homebrew/Cellar/emscripten/4.0.11/libexec/cache/sysroot/include \
  -O3 --bind \
  -s INITIAL_MEMORY=16777216 \
  -s ALLOW_MEMORY_GROWTH=1 \
  -s MAXIMUM_MEMORY=1073741824 \
  -s MODULARIZE=1 \
  -s EXPORT_NAME="Zap2D_core" \
  -s DISABLE_EXCEPTION_CATCHING=0 \
  -Wno-c++20-extensions \
  -o dist/index.js \
  src/cpp/RenderContext.cpp \
  src/cpp/zap2d.cpp