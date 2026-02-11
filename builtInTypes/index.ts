let userId: number = 101;
let userName: string = "fidatoNayan";
let isActive: boolean = true;
let firstName: string = "Nayan";
let lastName: string = "Islam";
const fullName = `${firstName} ${lastName}`;

const nameArr = fullName.split(" ");

const fullNameAgain = nameArr.join(" ");

console.log(fullNameAgain.toUpperCase());

const display = () => {
  console.log(`Your userID: ${userId}, your name: ${fullName}`);
};

display();
