import util from 'util';

export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  set name(x) {
    if (typeof x !== 'string') throw TypeError('Name must be a string');
    this._name = x;
  }

  get name() {
    return this._name;
  }

  set code(x) {
    if (typeof x !== 'string') throw TypeError('Code must be a string');
    this._code = x;
  }

  get code() {
    return this._code;
  }

  // Override toString for string conversion
  toString() {
    return `[${typeof this} ${this._code}]`;
  }

  // Customizing console.log output using util.inspect.custom
  [util.inspect.custom]() {
    // Dynamically generate the properties and their values
    const obj = Object.entries(this).map(([key, value]) => `${key}: '${value}'`).join(', ');
    // Construct the output
    return `${this.constructor.name} [${this._code}] { ${obj} }`;
  }
}
