function sayhello(name) {
  console.log("Hello", name);
  throw new Error("This is an error");
}

function wrapper(fn) {
  return function (name) {
    try {
      fn(name);
    } catch (err) {
      console.log("Error");
    }
  };
  return fn;
}




const createUser  = wrapper(sayhello);


createUser("John");

console.log("After error", "Application is not crashing");
