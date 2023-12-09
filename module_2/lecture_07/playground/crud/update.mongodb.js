use("skillslash");

// db.getCollection("users").updateOne({age: 60}, {$set: {name: "Anuj"}});


// upsert is an insert when no document found with filter
db.getCollection("users").updateOne({age: 60}, {$set: {name: "Anuj"}}, {
    upsert: true,
});