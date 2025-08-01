// Type definitions for Zap2D core module

// Export functions
export declare const add: (a: number, b: number) => number;
export declare const multiply: (a: number, b: number) => number;

// Declare the RenderContext class
export declare class RenderContext {
  constructor(width: number, height: number);
  clear(): void;
  render(): void;
  getWidth(): number;
  getHeight(): number;
}