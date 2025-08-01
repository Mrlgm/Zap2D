// Animation module TypeScript interfaces
/**
 * Animation implementation
 */
export class Animation {
    constructor(duration) {
        this.duration = duration;
        this.currentTime = 0;
        this.playing = false;
    }
    play() {
        this.playing = true;
    }
    pause() {
        this.playing = false;
    }
    stop() {
        this.playing = false;
        this.currentTime = 0;
    }
    update(deltaTime) {
        if (this.playing) {
            this.currentTime += deltaTime;
            if (this.currentTime >= this.duration) {
                this.currentTime = this.duration;
            }
        }
    }
}
//# sourceMappingURL=index.js.map