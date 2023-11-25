const fs = require("fs");



fs.readFile("./readme.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });



console.log("Hello world");
