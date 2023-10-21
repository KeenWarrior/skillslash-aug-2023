const arr = ["apple", "mango", "banana"];

const newArr = arr.map(function (item, index) {
  return (index+1) + " " + item;
});

console.log(newArr);