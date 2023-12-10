const csv = require("csv-parser");
const fs = require("fs");
let results = [];

fs.createReadStream("reddit_database.csv")
  .pipe(csv())
  .on("data", (data) => results.push(data))
  .on("end", () => {
    results = results.slice(0, 10000);
    fs.writeFile("reddit_database.json", JSON.stringify(results), (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("File successfully written!");
      }
    });
  });
