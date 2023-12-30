use("zero");

db.users.insertOne({
    _id : 2,
    name: "Ravi"
}, {
    writeConcern: {
        w: "majority",
        wtimeout: 1
    }
});