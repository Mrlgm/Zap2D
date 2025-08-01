/**
 * Animation interface
 */
export interface IAnimation {
    duration: number;
    currentTime: number;
    playing: boolean;
    play(): void;
    pause(): void;
    stop(): void;
    update(deltaTime: number): void;
}
/**
 * Animation implementation
 */
export declare class Animation implements IAnimation {
    duration: number;
    currentTime: number;
    playing: boolean;
    constructor(duration: number);
    play(): void;
    pause(): void;
    stop(): void;
    update(deltaTime: number): void;
}
//# sourceMappingURL=index.d.ts.map