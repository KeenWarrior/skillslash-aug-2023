use("instagram");

// db.getCollection("follow").createIndex(
//     {
//         following: 1,
//     }
// )

// db.getCollection("follow").createIndex(
//     {
//         follower: 1,
//     }
// )

db.getCollection("follow").createIndex({
  following: 1,
  follower: 1,
}, {
    unique: true,
});
