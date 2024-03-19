class Storage {
  constructor() {
    this.storage = [];
  }

  get() {
    return this.storage;
  }
  set(value) {
    this.storage.push(value);
  }
}

export default new Storage();
