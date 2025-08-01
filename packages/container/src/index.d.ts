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
export declare class Container implements IContainer {
    x: number;
    y: number;
    children: (ISprite | IContainer)[];
    constructor(x: number, y: number);
    addChild(child: ISprite | IContainer): void;
    removeChild(child: ISprite | IContainer): void;
    render(): void;
}
//# sourceMappingURL=index.d.ts.map