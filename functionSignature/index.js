var log = console.log;
var userInfo1;
var userInfo2;
var userInfo3;
userInfo1 = function () {
    log("My name is Nayan Islam");
};
userInfo1();
userInfo2 = function (name) {
    log("My name is ".concat(name));
};
userInfo2("Nayan Islam");
userInfo3 = function (name, age) {
    return "My name is ".concat(name, " and I'm ").concat(age, " years old");
};
log(userInfo3("Nayan Islam", 28));
