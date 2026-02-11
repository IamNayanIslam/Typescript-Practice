class User {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    console.log(`Name: ${this.userName}, Age: ${this.age}`);
  }
}

const user1 = new User("Nayan Islam", 27);
const user2 = new User("Hiya Akter", 23);

user1.display();
user2.display();
