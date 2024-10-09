import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  set amount(x) {
    if (typeof x !== 'number') throw TypeError('Amount must be a string');
    this._amount = x;
  }

  get amount() {
    return this._amount;
  }

  set currency(obj) {
    if (obj instanceof Currency) this._currency = obj;
    else throw TypeError('Currency must be a currency');
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') throw TypeError('Amount must be a number');
    if (typeof conversionRate !== 'number') throw TypeError('ConversionRate must be a number');
    return amount * conversionRate;
  }
}
