interface DefaultInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
}

interface DirectorInterface extends DefaultInterface {
  workDirectorTasks(): string;
}

interface TeacherInterface extends DefaultInterface {
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome() {
    return `Working from home`;
  }

  getCoffeeBreak() {
    return `Getting a coffee break`;
  }

  workDirectorTasks() {
    return `Getting to director tasks`;
  }
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return `Cannot work from home`;
  }

  getCoffeeBreak(): string {
    return `Cannot have a break`;
  }

  workTeacherTasks() {
    return `Getting to work`;
  }
}

function createEmployee(salary: number | string) {
  if (typeof salary === 'number' && salary < 500) return new Teacher();
  return new Director(); 
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

function isDirector(employee: Teacher | Director) {
  return employee instanceof Director;
}

function executeWork(employee: Teacher | Director) {
  if (!isDirector(employee)) {
    console.log(employee.workTeacherTasks());
    return;
  }
  console.log(employee.workDirectorTasks());
}

executeWork(createEmployee(200));
executeWork(createEmployee(2000));

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects) {
  if (todayClass === 'Math') return 'Teaching Math';
  return 'Teaching History';
}

console.log(teachClass('Math'));
console.log(teachClass('History'));