var log = console.log;
var user1 = {
    id: 1,
    name: "Nayan Islam",
    age: 32,
};
var user2 = {
    id: 2,
    name: "Md. Nayan Islam",
    age: 28,
};
var users = [];
users.push(user1);
users.push(user2);
var printUserInfo = function (user) {
    log("".concat(user.name, "'s user ID is: ").concat(user.id, " and age is: ").concat(user.age));
};
users.forEach(function (user) { return printUserInfo(user); });
