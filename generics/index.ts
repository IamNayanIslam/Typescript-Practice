const log = console.log;

const printUserInfo = <x>(userId: x) => {
  log(`User Id: ${userId}`);
};

printUserInfo("101");
printUserInfo(101);
printUserInfo(true);
printUserInfo({ id: 101 });
