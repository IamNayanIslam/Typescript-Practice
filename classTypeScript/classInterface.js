var log = console.log;
var User = /** @class */ (function () {
    function User(fullname, age) {
        var _this = this;
        this.fullname = fullname;
        this.age = age;
        this.formatUser = function () {
            return "User Name: ".concat(_this.fullname, ", User age: ").concat(_this.age);
        };
    }
    return User;
}());
var user = new User("Mr. Potato", 23);
log(user.formatUser());
