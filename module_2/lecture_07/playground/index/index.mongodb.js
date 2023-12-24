use("skillslash")

// db.getCollection("random").createIndex({
//     age: 1
// })


db.getCollection("random").dropIndex({
    age: 1
})