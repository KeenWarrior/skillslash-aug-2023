use("instagram");

db.getCollection("follow")
  .find({
    following: "user200",
    follower: "user100",
  })
  .explain("executionStats");
