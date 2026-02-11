let user1: { userName: string; userId: number };

user1 = {
  userName: "Nayan Islam",
  userId: 101,
};

let user2: { userName: string; userId: number };

user2 = {
  userName: "Hiya Akter",
  userId: 102,
};

let users: object[];

users = [];

users.push(user1);
users.push(user2);

console.log(users);

/* for (const key in users) {
  const name = users[key];
  const userName = name.userName;
} */
