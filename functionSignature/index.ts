const log = console.log;

let userInfo1: () => void;
let userInfo2: (name: string) => void;
let userInfo3: (name: string, age: number) => string;

userInfo1 = () => {
  log("My name is Nayan Islam");
};

userInfo1();

userInfo2 = (name: string) => {
  log(`My name is ${name}`);
};

userInfo2("Nayan Islam");

userInfo3 = (name: string, age: number) => {
  return `My name is ${name} and I'm ${age} years old`;
};

log(userInfo3("Nayan Islam", 28));
