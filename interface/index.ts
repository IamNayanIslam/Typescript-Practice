const log = console.log;

interface IUser {
  id: number;
  name: string;
  age: number;
}

let user1: IUser = {
  id: 1,
  name: "Nayan Islam",
  age: 32,
};

let user2: IUser = {
  id: 2,
  name: "Md. Nayan Islam",
  age: 28,
};

let users: IUser[] = [];

users.push(user1);
users.push(user2);

const printUserInfo = (user: IUser): void => {
  log(`${user.name}'s user ID is: ${user.id} and age is: ${user.age}`);
};

users.forEach((user) => printUserInfo(user));
