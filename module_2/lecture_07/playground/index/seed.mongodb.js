use("skillslash");

const data = [];

for(let i=0; i<1000000; i++) {
    data.push({
        name: "Random " + i,
        age: Math.floor(Math.random() * 100),
    });
}

console.log("Inserting data...");

db.getCollection("random").insertMany(data);