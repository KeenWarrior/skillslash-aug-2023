// named
function hello(name) {
  console.log(`Hello ${name}`);
}

// named
const another = function hello(name) {
  console.log(`Hello ${name}`);
};

// anonymous
const hello = function (name) {
  console.log(`Hello ${name}`);
};

// anonymous
const hello = (name) => {
  console.log(`Hello ${name}`);
};

// anonymous
const hello = (name) => console.log(`Hello ${name}`);
