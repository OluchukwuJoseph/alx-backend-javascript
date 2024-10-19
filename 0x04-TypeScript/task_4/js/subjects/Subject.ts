namespace Subjects {
  export class Subject {
    // _teacher attr that implements the Teacher interface
    protected _teacher: Teacher;

    // setter method that accepts a teacher in argument
    setTeacher(teacher: Teacher): void {
      this._teacher = teacher;
    }
  }
}
