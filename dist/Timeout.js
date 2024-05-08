export default class Timeout {
    id;
    handle;
    start;
    timeLeft;
    constructor(handle, time) {
        this.id = setTimeout(handle, time);
        this.handle = handle;
        this.start = Date.now();
        this.timeLeft = time;
    }
    clear() {
        clearTimeout(this.id);
    }
    pause() {
        const passed = Date.now() - this.start;
        this.timeLeft = this.timeLeft - passed;
        this.clear();
    }
    continue() {
        this.clear();
        this.id = setTimeout(this.handle, this.timeLeft);
        this.start = Date.now();
    }
}
//# sourceMappingURL=Timeout.js.map