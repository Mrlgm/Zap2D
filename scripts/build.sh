#!/bin/bash

# Exit on any error
set -e

# Check if emscripten is installed
if ! command -v emcc &> /dev/null; then
  echo "Emscripten is not installed. Please install it first."
  echo "You can install it by following the instructions at: https://emscripten.org/docs/getting_started/downloads.html"
  exit 1
fi

# Activate emscripten environment
source "$HOME/emsdk/emsdk_env.sh" 2>/dev/null || true

# Build the core WebAssembly module
echo "Building core WebAssembly module..."
yarn build:core

# Build TypeScript interfaces
echo "Building TypeScript interfaces..."
yarn build:ts

echo "Build completed successfully!"