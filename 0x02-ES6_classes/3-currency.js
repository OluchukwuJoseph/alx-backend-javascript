export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  set code(x) {
    if (typeof x !== 'string') throw TypeError('Code must be a string');
    this._code = x;
  }

  get code() {
    return this._code;
  }

  set name(x) {
    if (typeof x !== 'string') throw TypeError('Name must be a string');
    this._name = x;
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
