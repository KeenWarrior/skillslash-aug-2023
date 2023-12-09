use("skillslash");

db.getCollection("users").deleteOne({
    age: 30,
});