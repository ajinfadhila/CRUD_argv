// console.log("app.js");
const fs = require("fs");
let argv = process.argv
const controller = require("./controll/controller.js");
const control = new controller()


if (argv[2]=== "add") {
  if (argv[3] === undefined) {
    console.log("tidak ada data yg di input")
  } else {
    let add = control.addData(argv[3],argv[4])
    console.log(add);
  }
} else if (argv[2] === "remove") {
  if (argv[3] === undefined) {
      console.log("tidak ada id yg di input");
  } else {
    let rmv = control.remove(argv[3])
    console.log(rmv);
  }
} else if(argv[2] === "read"){
  for (var i = 0; i < control.data.length; i++) {
    console.log(control.data[i]);
  }
} else if(argv[2] === "edit"){
  let edt = control.edit(argv[3],argv[4],argv[5])
  // console.log(argv)
}
