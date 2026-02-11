var userId = 101;
var userName = "fidatoNayan";
var isActive = true;
var firstName = "Nayan";
var lastName = "Islam";
var fullName = "".concat(firstName, " ").concat(lastName);
var nameArr = fullName.split(" ");
var fullNameAgain = nameArr.join(" ");
console.log(fullNameAgain.toUpperCase());
var display = function () {
    console.log("Your userID: ".concat(userId, ", your name: ").concat(fullName));
};
display();
