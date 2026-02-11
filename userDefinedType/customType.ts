type User = { userName: string; userId: number };

let users: User[];

users = [];

let user1: User;

user1 = {
  userName: "Nayan Islam",
  userId: 101,
};

users.push(user1);

let user2: User;

user2 = {
  userName: "Hiya Akter",
  userId: 102,
};
users.push(user2);

let user3: User;

user3 = {
  userName: "Khalid Mohammad Saifullah",
  userId: 103,
};
users.push(user3);

console.log(users);
