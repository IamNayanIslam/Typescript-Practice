import { log } from "./student";

export class User {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    log(`Name: ${this.userName}, Age: ${this.age}`);
  }
}
