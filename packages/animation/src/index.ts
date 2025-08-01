// Animation module TypeScript interfaces

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
export class Animation implements IAnimation {
  duration: number;
  currentTime: number;
  playing: boolean;
  
  constructor(duration: number) {
    this.duration = duration;
    this.currentTime = 0;
    this.playing = false;
  }
  
  play(): void {
    this.playing = true;
  }
  
  pause(): void {
    this.playing = false;
  }
  
  stop(): void {
    this.playing = false;
    this.currentTime = 0;
  }
  
  update(deltaTime: number): void {
    if (this.playing) {
      this.currentTime += deltaTime;
      if (this.currentTime >= this.duration) {
        this.currentTime = this.duration;
      }
    }
  }
}