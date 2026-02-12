"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var student_1 = require("./student");
var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        (0, student_1.log)("Name: ".concat(this.userName, ", Age: ").concat(this.age));
    };
    return User;
}());
exports.User = User;
