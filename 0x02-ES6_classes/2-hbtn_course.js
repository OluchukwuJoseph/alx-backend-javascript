export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  set name(x) {
    if (typeof x !== 'string') throw TypeError('Name must be a string');
    this._name = x;
  }

  get name() {
    return this._name;
  }

  set length(x) {
    if (typeof x !== 'number') throw TypeError('Length must be a number');
    this._length = x;
  }

  get length() {
    return this._length;
  }

  set students(x) {
    if (!Array.isArray(x)) throw TypeError('Students must be an array');
    x.forEach((student) => {
      if (typeof student !== 'string') throw TypeError('Students must be an array of strings');
    });
    this._students = x;
  }

  get students() {
    return this._students;
  }
}
