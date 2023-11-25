const fs = require("fs");

function readFile(resolve, reject) {
  fs.readFile("./readme.txt", "utf-8", (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
}

const promise = new Promise(readFile);

promise.then((value) => {
    console.log(value);
}).catch((err) => {
    console.log(err);
});

// function f1(resolve, reject) {
//   setTimeout(() => {
//     resolve("Ultratech Cement");
//   }, 2000);
// }

// function f2(resolve, reject) {
//   setTimeout(() => {
//     resolve("Ambuja Cement");
//   }, 3000);

//   setTimeout(() => {
//     reject("Ambuja Cement");
//   }, 1000);
// }

// const cement1 = new Promise(f1);

// const cement2 = new Promise(f2);

// Promise.any([cement1, cement2]).then((value) => {
//   console.log(value);
// });
