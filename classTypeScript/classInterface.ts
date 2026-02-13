const log = console.log;

interface IUserFormatter {
  formatUser: () => string;
}

class User implements IUserFormatter {
  constructor(
    private fullname: string,
    private age: number,
  ) {}

  formatUser = () => {
    return `User Name: ${this.fullname}, User age: ${this.age}`;
  };
}

let user = new User("Mr. Potato", 23);

log(user.formatUser());
