// enum -store constants only, duplicate values are not allowed here.
//there are three types of enums
//numeric enum
//string enum
//hetrogenious enum

enum RequestType {
  readData = 1,
  saveData,
  deleteData,
}

console.log(RequestType);

enum RequestType2 {
  readData = "READ_DATA",
  saveData = "SAVE_DATA",
  deleteData = "DELETE_DATA",
}

console.log(RequestType2.deleteData);

enum RequestType3 {
  readData = "READ_DATA",
  saveData = "SAVE_DATA",
  deleteData = "DELETE_DATA",
  id = 101,
}
