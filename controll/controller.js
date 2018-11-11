`use strict`
// console.log("controller");
const fs = require("fs");
class Controller {
  constructor() {
    try {
      var data = fs.readFileSync("datas.json")
      this.data = JSON.parse(data)
    } catch (e) {
      this.data = []
    }
  }

  addData(nama,almt){
    let datas = this.data
    let count = 0
    var arr = []
    var obj = {}
    // console.log(datas.length);
    if (datas.length === 0) {
      obj = {
       id:1,
       name:nama,
       alamat: almt
     }
      // console.log(obj);
    }
    for (var i = 0; i < datas.length; i++) {
      count++
      if (datas[i].name !== nama) {
         obj = {
          id:count+1,
          name:nama,
          alamat: almt
        }
      } else{
        arr.push(datas)
      }
      // arr.push(obj)
    }
    // console.log(arr)
    if (arr.length !== 0) {
      // console.log("data sudah ada");
      return "data sudah ada"
    } else {
      datas.push(obj)
      // console.log(datas);
      let input = JSON.stringify(datas);
      fs.writeFileSync("datas.json",input);
      return "data berhasil di tambahkan"
    }
    // console.log(arr)
    // console.log(arr.length);
  }

  remove(num){
    // console.log(num);
    if (num === undefined) {
      return "anda tidak memasukan id yg ingin di remove"
    }
    let datas = this.data;
    let id = Number(num);
    let arr = []
    var count = 0
    // console.log(datas.length, id);

    // if (arr.length < id) {
    //   console.log("id yg ingin anda delet tidak ada");
    // }
    for (var i = 0; i < datas.length; i++) {
      // console.log(datas[i].id +" === " +id);
      if (datas[i].id === id) {
        // console.log(datas[i]);
      } else {
        count++
        // arr.push(datas[i])
        let obj = {
          id:count,
          name: datas[i].name,
          alamat: datas[i].alamat
        }
        arr.push(obj)
      }
    }
    // console.log(arr.length +" < "+ id);
    if (datas.length < id) {
      // console.log("data yg ingin anda hapus tidak ada");
      return "data yg ingin anda hapus tidak ada"
    } else {
      this.data = arr
      this.data = JSON.stringify(this.data);
      fs.writeFileSync('datas.json',this.data)
      // console.log("data berhasil di hapus");
      return "data berhasil di hapus"
    }
  }
  edit(id,nama,almt){
    let arr = this.data
    let num = Number(id)
    let simpan = []
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].id === num) {
        if (nama === "no") {
          arr[i].name = arr[i].name
        }else{
          arr[i].name = nama
        }
        if (almt === "no") {
          arr[i].alamat
        }else{
          arr[i].alamat = almt
        }
      }
      // console.log(arr[i].id,num)
      simpan.push(arr[i])
    }
    this.data = simpan
    this.data = JSON.stringify(this.data);
    fs.writeFileSync('datas.json',this.data)
    console.log(simpan)
  }
}

module.exports = Controller
