let userId: string | number | boolean;

userId = "101";
userId = 101;
userId = true;

const displayUserInfo = (userId: number | string | boolean) => {
  console.log(userId);
};

displayUserInfo(userId);
