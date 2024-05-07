export default class Timeout {
    id;
    handle;
    constructor(handle, time) {
        this.id = setTimeout(handle, time);
        this.handle = handle;
    }
    clear() {
        clearTimeout(this.id);
    }
}
//# sourceMappingURL=Timeout.js.map