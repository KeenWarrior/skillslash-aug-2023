use("reddit");

db.getCollection("feeds").aggregate([
  {
    $match: {
      author: {
        $ne: "[deleted]",
      },
      score: {
        $gte: 0,
      },
    },
  },
  {
    $group: {
      _id: "$author",
      count: {
        $sum: 1,
      },
      avg_score: {
        $avg: "$score",
      },
    },
  },
  {
    $addFields: {
      calculted_score: {
        $multiply: ["$count", "$avg_score"],
      },
    },
  },
  {
    $sort: {
      calculted_score: -1,
    },
  },
  {
    $skip: 3,
  },
  {
    $limit: 3,
  },
  {
    $addFields: {
      author: "$_id",
    },
  },
  {
    $unset: "_id",
  },
  {
    $merge: {
      into: "calculations",
      on: "author",
      whenMatched: "replace",
      whenNotMatched: "insert",
    },
  },
]);
