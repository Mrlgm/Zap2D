// Container module TypeScript interfaces
/**
 * Container implementation
 */
export class Container {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.children = [];
    }
    addChild(child) {
        this.children.push(child);
    }
    removeChild(child) {
        const index = this.children.indexOf(child);
        if (index !== -1) {
            this.children.splice(index, 1);
        }
    }
    render() {
        // Implementation will be provided by WebAssembly
        // Render all children
        for (const child of this.children) {
            child.render();
        }
    }
}
//# sourceMappingURL=index.js.map