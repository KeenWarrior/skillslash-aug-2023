use("skillslash");

// db.getCollection("users").find();

db.getCollection("users").find({
    $or: [
        { age: { $lt: 25 } },
        { job: "Software Engineer" }
    ]
})
