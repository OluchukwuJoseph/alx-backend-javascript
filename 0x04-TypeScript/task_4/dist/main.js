// task_4/js/main.ts
// Import interfaces and classes from the subjects
import { Subjects } from './subjects/Subject';
// Create and export constants for subjects
export var cpp = new Subjects.Cpp();
export var java = new Subjects.Java();
export var react = new Subjects.React();
// Create and export a Teacher object cTeacher with experienceTeachingC = 10
export var cTeacher = { firstName: "John", lastName: "Doe", experienceTeachingC: 10 };
// For Cpp subject
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
// For Java subject
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
// For React subject
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
//# sourceMappingURL=main.js.map