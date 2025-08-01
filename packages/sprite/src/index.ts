// Sprite module TypeScript interfaces

/**
 * Texture interface
 */
export interface ITexture {
  width: number;
  height: number;
  bind(): void;
}

/**
 * Sprite interface
 */
export interface ISprite {
  x: number;
  y: number;
  width: number;
  height: number;
  texture: ITexture | null;
  render(): void;
}

/**
 * Texture implementation
 */
export class Texture implements ITexture {
  width: number;
  height: number;
  
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  
  bind(): void {
    // Implementation will be provided by WebAssembly
  }
}

/**
 * Sprite implementation
 */
export class Sprite implements ISprite {
  x: number;
  y: number;
  width: number;
  height: number;
  texture: ITexture | null;
  
  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.texture = null;
  }
  
  render(): void {
    // Implementation will be provided by WebAssembly
  }
}