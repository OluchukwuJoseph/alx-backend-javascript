export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  set size(x) {
    if (typeof x !== 'number') throw TypeError('Size must be a number');
    this._size = x;
  }

  get size() {
    return this._size;
  }

  set location(x) {
    if (typeof x !== 'string') throw TypeError('Location must be a string');
    this._location = x;
  }

  get location() {
    return this._location;
  }

  toString() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }
}
