const log = console.log;
//access modifiers: public, private, protected, readonly
class User {
  //   protected userName: string;
  //   public userName: string;
  readonly userName: string;
  public age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    log(`User Name: ${this.userName}, Age: ${this.age}`);
  }
}

class Student extends User {
  private studentId: number;

  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }

  display(): void {
    log(
      `User Name: ${this.userName}, Age: ${this.age} and Id: ${this.studentId}`,
    );
  }

  setStudentId(studentId: number): void {
    this.studentId = studentId;
  }
  getStudentId(): number {
    return this.studentId;
  }
}

const student1 = new Student("Nayan Islam", 28, 101);
student1.setStudentId(102);
log(student1.getStudentId());
// student1.display();

const user1 = new User("Nayan Islam", 27);
log(user1.userName);
const user2 = new User("Hiya Akter", 23);

// user1.display();
// user2.display();
