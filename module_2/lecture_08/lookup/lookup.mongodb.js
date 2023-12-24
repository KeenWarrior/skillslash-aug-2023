use("lookup-demo");

const page = 6;
const pageSize = 10;

db.getCollection("users").aggregate([
  {
    $match: {
      _id: 1,
    },
  },
  {
    $lookup: {
      from: "posts",
      localField: "_id",
      foreignField: "creator",
      as: "posts",
      pipeline: [
        {
          $sort: {
            _id: 1,
          },
        },
        {
            $skip: (page-1) * pageSize,
        },
        {
          $limit: pageSize,
        },
      ],
    },
  },
]);
