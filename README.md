# Zap2D

A high-performance 2D rendering engine reimplemented from PixiJS using C++ and WebAssembly, with TypeScript interfaces.

## Project Structure

```
zap2d/
├── package.json                 # 根项目配置（启用workspaces）
├── packages/
│   ├── core/                    # 核心渲染模块（必选）
│   │   ├── cpp/                 # C++核心逻辑（如渲染管线、矩阵运算）
│   │   ├── ts/                  # TS类型定义与API封装
│   │   ├── dist/                # 编译产物（WASM+JS桥接文件）
│   │   ├── emscripten.config.js # 编译配置（指定输出、内存等）
│   │   └── package.json         # 模块配置（依赖、构建脚本）
│   │
│   ├── sprite/                  # 精灵与纹理模块
│   │   ├── cpp/                 # 纹理加载、精灵渲染的C++实现
│   │   ├── ts/                  # Sprite/Texture等TS类定义
│   │   └── package.json
│   │
│   ├── container/               # 容器与场景图模块
│   │   ├── cpp/
│   │   ├── ts/
│   │   └── package.json
│   │
│   ├── animation/               # 动画系统模块
│   │   ├── cpp/
│   │   ├── ts/
│   │   └── package.json
│   │
│   ├── api/                     # 对外统一API入口（聚合各模块）
│   │   ├── ts/                  # 导出完整TS类型与入口函数
│   │   └── package.json
│   │
│   ├── tools/                   # 辅助工具（如类型生成、编译脚本）
│   │   ├── ts/
│   │   └── package.json
│   │
│   └── examples/                # 示例项目（验证功能）
│       ├── ts/
│       └── package.json
└── scripts/                     # 全局构建脚本（如批量编译WASM）
```

## Features

- High-performance rendering using C++ and WebAssembly
- Familiar API similar to PixiJS
- TypeScript type definitions
- Modular architecture with Yarn workspaces

## Getting Started

```bash
yarn install
yarn build
```

## Building

- `yarn build` - Build all packages using Yarn workspaces
- `yarn clean` - Clean build artifacts from all packages

Alternatively, you can use the Makefile:

- `make build` - Build everything
- `make clean` - Clean build artifacts
- `make install` - Install dependencies
- `make example` - Run examples

For more information, run `make help`.

## Running Examples

To run the examples:

1. Build the project:
   ```bash
   yarn build
   ```

2. Start the development server:
   ```bash
   yarn example
   ```

3. Open your browser and navigate to `http://localhost:3000`

The example will demonstrate basic usage of the Zap2D renderer, including creating a rendering context and performing simple rendering operations.

## License

MIT
