use("instagram");

// let users = [];

// for (let i = 0; i < 10000; i++) {
//     users.push({
//         username: `user${i + 1}`,
//     });
// }

// db.getCollection("users").insertMany(users);

let follow = [];

for (let i = 0; i < 1000000; i++) {
  const [following, follower] = [
    `user${Math.floor(Math.random() * 10000) + 1}`,
    `user${Math.floor(Math.random() * 10000) + 1}`,
  ];

  if(following != follower) {
        follow.push({
            following,
            follower,
        })
  }
}

db.getCollection("follow").insertMany(follow);
