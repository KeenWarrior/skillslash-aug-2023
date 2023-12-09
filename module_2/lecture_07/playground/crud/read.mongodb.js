use("skillslash");

// db.getCollection("users").find();

// db.getCollection("users").find({ name: "John Doe" });

// db.getCollection("users").find({ age: 30 });

// db.getCollection("users").find({
//   age: {
//     $ne: 29,
//   },
// });

// lt, lte, gt, gte, ne, in, nin

// db.getCollection("users").find({
//   name: "Anuj Garg",
//   age: {
//     $in: [19, 30],
//   },
// });

// db.getCollection("users").findOne({
//   name: "Anuj Garg",
// });

db.getCollection("users").find({
  $nor: [
    {
      $or: [
        {
          address: {
            $size: 1,
          },
        },
        {
          address: {
            $elemMatch: {
              primary: true,
            },
          },
        },
      ],
    },
  ],
});
