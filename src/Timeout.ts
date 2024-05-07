export default class Timeout {
  id;
  handle;
  constructor(handle: TimerHandler, time: number) {
    this.id = setTimeout(handle, time);
    this.handle = handle;
  }
  clear() {
    clearTimeout(this.id);
  }
}
