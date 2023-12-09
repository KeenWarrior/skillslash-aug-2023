use("skillslash");

db.getCollection("bills").insertMany([
    {
        "name": "Electricity Bill",
        "spent": 1000,
        "budget": 10000,
        "dueDate": new Date("2021-09-01"),
        "paid": false,
    },
    {
        name: "Water Bill",
        spent: 500,
        budget: 1000,
        dueDate: new Date("2021-09-01"),
        paid: true,
    },
    {
        name: "Internet Bill",
        spent: 1000,
        budget: 100,
        dueDate: new Date("2021-09-01"),
        paid: false,
    }
]);