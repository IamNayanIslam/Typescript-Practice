"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as Student from "./student";
// import { studentAge as age, studentName as name, log } from "./student";
var student_1 = require("./student");
var userClass_1 = require("./userClass");
var displayInfo = function () {
    (0, student_1.log)("".concat(student_1.studentName, ", ").concat(student_1.studentAge));
    //   log(`${name}, ${age}`);
    //   Student.log(`${Student.studentName}, ${Student.studentAge}`);
};
displayInfo();
var user1 = new userClass_1.User("Nayan Islam", 101);
user1.display();
