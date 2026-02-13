var log = console.log;
var printUserInfo = function (userId) {
    log("User Id: ".concat(userId));
};
printUserInfo("101");
printUserInfo(101);
printUserInfo(true);
printUserInfo({ id: 101 });
