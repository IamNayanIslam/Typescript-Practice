// import * as Student from "./student";
// import { studentAge as age, studentName as name, log } from "./student";
import { studentAge, studentName, log } from "./student";
import { User } from "./userClass";

const displayInfo = (): void => {
  log(`${studentName}, ${studentAge}`);
  //   log(`${name}, ${age}`);
  //   Student.log(`${Student.studentName}, ${Student.studentAge}`);
};

displayInfo();

const user1 = new User("Nayan Islam", 101);

user1.display();
