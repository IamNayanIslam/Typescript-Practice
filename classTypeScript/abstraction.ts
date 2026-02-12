const log = console.log;

abstract class User {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  abstract display(): void;
}

class Student extends User {
  studentId: number;

  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }

  display(): void {
    log(
      `User Name: ${this.userName}, Age: ${this.age} and Id: ${this.studentId}`,
    );
  }
}

const student1 = new Student("Nayan Islam", 28, 101);

student1.display();

/* const user1 = new User("Nayan Islam", 27);
const user2 = new User("Hiya Akter", 23);

user1.display();
user2.display();
 */
