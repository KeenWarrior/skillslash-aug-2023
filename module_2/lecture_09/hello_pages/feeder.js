const { faker } = require("@faker-js/faker");
const User = require("./models/user.model.js");
const { default: mongoose } = require("mongoose");

mongoose
  .connect("mongodb+srv://skillslash:skillslash@cluster0.sq7lkpn.mongodb.net/page-demo?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    createFakeUsers();
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

function createFakeUsers() {
  for (let i = 0; i < 1000; i++) {
    const user = new User({
      name: faker.person.fullName(),
      email: faker.internet.email()
    });
    user.save();
  }
}
