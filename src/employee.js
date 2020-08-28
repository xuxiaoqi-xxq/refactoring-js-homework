class Employee {
  constructor (name, type) {
    this.validateType(type);
    this._name = name;
    this._type = type;
  }

  validateType (type) {
    if (!this.isTypeInRage(type)) {
      throw new Error(`Employee cannot be of type ${type}`);
    }
  }

  isTypeInRage(type) {
    let range = ['engineer', 'manager', 'salesman'];
    return range.includes(type);
  }

  toString () {
    return `${this._name} (${this._type})`;
  }
}

module.exports = Employee
