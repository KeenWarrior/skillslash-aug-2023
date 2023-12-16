const User = require("./models/user.model.js");
const { default: mongoose } = require("mongoose");

mongoose
  .connect("mongodb+srv://skillslash:skillslash@cluster0.sq7lkpn.mongodb.net/page-demo?retryWrites=true&w=majority")
  .then(async () => {
    const docs = await User.paginate({
        role: "user"
    }, {
        page: 10,
        limit: 10,
        orderBy: {
            createdAt: "desc"
        }
    });
    console.log(docs);
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });