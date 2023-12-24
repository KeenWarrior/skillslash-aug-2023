use("lookup-demo");

// db.getCollection("users").insertMany([
//     {
//         _id: 1,
//         name: "Max",
//         age: 29,
//     },
//     {
//         _id: 2,
//         name: "Manu",
//         age: 30,
//     },
//     {
//         _id: 3,
//         name: "Julie",
//         age: 31,
//     },
// ])

db.getCollection("posts").insertMany([
  {
    _id: 1,
    title: "My first post",
    text: "This is my first post",
    creator: 1,
    comments: [
      {
        _id: 1,
        text: "I like this post",
      },
    ],
  },
  {
    _id: 2,
    title: "My second post",
    text: "This is my second post",
    creator: 1,
    comments: [
      {
        _id: 2,
        text: "I like this post",
      },
    ],
  },
  {
    _id: 3,
    title: "My third post",
    text: "This is my third post",
    creator: 2,
    comments: [
      {
        _id: 3,
        text: "I like this post",
      },
    ],
  },
  {
    _id: 4,
    title: "My fourth post",
    text: "This is my fourth post",
    creator: 3,
    comments: [
      {
        _id: 4,
        text: "I like this post",
      },
    ],
  },
]);
