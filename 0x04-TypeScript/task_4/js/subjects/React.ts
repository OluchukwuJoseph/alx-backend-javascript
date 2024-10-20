namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subject {
    getRequirements() {
      return `Here is the list of requirements for React`;
    }

    getAvailableTeacher() {
      if (!this._teacher.experienceTeachingReact) return `No available teacher`;
      return `Available Teacher: ${this._teacher.firstName}`;
    }
  }
}
