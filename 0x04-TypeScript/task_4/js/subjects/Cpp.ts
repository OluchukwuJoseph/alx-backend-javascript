namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    getRequirements() {
      return `Here is the list of requirements for Cpp`;
    }

    getAvailableTeacher() {
      if (!this._teacher.experienceTeachingC) return `No available teacher`;
      return `Available Teacher: ${this._teacher.firstName}`;
    }
  }
}
