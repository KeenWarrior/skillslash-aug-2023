const fs = require("fs/promises");

async function taskA() {
  try {
    const data1Promise = fs.readFile("./a.js", "utf-8");
    const data2Promise = fs.readFile("./b.js", "utf-8");
    const [data1, data2] = await Promise.all([data1Promise, data2Promise]);
    return data1 + data2;
  } catch (error) {
    throw new Error("One of the files could not be read");;
  }
}

const response = taskA();

response.then((data) => console.log(data)).catch((error) => console.log(error.message));
