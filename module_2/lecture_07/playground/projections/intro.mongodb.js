use("skillslash");

db.getCollection("users").find({}, {
    _id: 0,
    name: 0,
});