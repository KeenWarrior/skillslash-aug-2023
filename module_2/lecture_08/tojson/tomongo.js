const mongoose = require("mongoose");
const data = require("./reddit_database.json");

const connetionString =
  "mongodb+srv://skillslash:skillslash@cluster0.sq7lkpn.mongodb.net/reddit?retryWrites=true&w=majority";

const feedSchema = new mongoose.Schema({
  created_date: String,
  created_timestamp: Number,
  subreddit: String,
  title: String,
  author: String,
  author_created_utc: String,
  full_link: String,
  score: Number,
  num_comments: Number,
  num_crossposts: Number,
  subreddit_subscribers: Number,
  post: String,
});

const Feed = mongoose.model("Feed", feedSchema);

mongoose
  .connect(connetionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    Feed.insertMany(data)
      .then(() => {
        console.log("Data inserted");
        mongoose.disconnect();
      })
      .catch((err) => {
        console.log(err);
      });
  });
