use("capped");

// db.createCollection("logs", {
//     capped: true,
//     size: 10000,
//     max: 10
// });


// for (let i = 100; i < 200; i++) {
//     db.logs.insertOne({
//         ts: new Date(),
//         msg: "Hello " + i
//     });
// }

db.logs.deleteOne({
    msg: "Hello 192"
});
