# Getting Started with Zap2D

## Project Structure

The project is organized as a monorepo using Yarn workspaces:

```
/packages
  /core          # C++ core implementation and WebAssembly build
  /typescript    # TypeScript interfaces and bindings
  /examples      # Example projects showcasing usage
  /benchmarks    # Performance benchmarks
/docs            # Documentation
/scripts         # Build scripts and utilities
```

## Prerequisites

- Node.js (v16 or higher)
- Yarn (v3 or higher)
- Emscripten SDK (for building WebAssembly)

## Setup

1. Install dependencies:
   ```bash
   yarn install
   ```

2. Build the project:
   ```bash
   yarn build
   ```

## Building Individual Packages

- Build the C++ core and WebAssembly module:
  ```bash
  yarn build:core
  ```

- Build TypeScript interfaces:
  ```bash
  yarn build:ts
  ```

## Running Examples

```bash
yarn example
```

## Running Benchmarks

```bash
yarn bench
```

## Development Workflow

1. Make changes to the C++ code in `packages/core/src/`
2. Rebuild the WebAssembly module: `yarn build:core`
3. Make changes to TypeScript interfaces in `packages/typescript/src/`
4. Rebuild TypeScript interfaces: `yarn build:ts`
5. Test changes in examples: `yarn example`