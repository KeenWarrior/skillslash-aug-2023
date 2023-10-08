const { sum, square } = require("./utils.js");
const axios = require("axios");

// console.log(square(4));

// console.log(sum(4, 5));

axios.get("https://api.github.com/users/keenwarrior").then(function (res) {
  console.log(res.data);
});
