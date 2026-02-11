var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("Name: ".concat(this.userName, ", Age: ").concat(this.age));
    };
    return User;
}());
var user1 = new User("Nayan Islam", 27);
var user2 = new User("Hiya Akter", 23);
user1.display();
user2.display();
