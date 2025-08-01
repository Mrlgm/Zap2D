// Container module TypeScript interfaces

import { ISprite } from '@zap2d/sprite';

/**
 * Container interface
 */
export interface IContainer {
  x: number;
  y: number;
  children: (ISprite | IContainer)[];
  addChild(child: ISprite | IContainer): void;
  removeChild(child: ISprite | IContainer): void;
  render(): void;
}

/**
 * Container implementation
 */
export class Container implements IContainer {
  x: number;
  y: number;
  children: (ISprite | IContainer)[];
  
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.children = [];
  }
  
  addChild(child: ISprite | IContainer): void {
    this.children.push(child);
  }
  
  removeChild(child: ISprite | IContainer): void {
    const index = this.children.indexOf(child);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }
  
  render(): void {
    // Implementation will be provided by WebAssembly
    // Render all children
    for (const child of this.children) {
      child.render();
    }
  }
}