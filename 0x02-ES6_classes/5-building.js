export default class Building {
  constructor(sqft) {
    this.sqft = sqft;

    if (this.constructor !== Building && !this.evacuationWarningMessage) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  set sqft(x) {
    if (typeof x !== 'number') throw TypeError('Sqft must be a number');
    this._sqft = x;
  }

  get sqft() {
    return this._sqft;
  }
}
