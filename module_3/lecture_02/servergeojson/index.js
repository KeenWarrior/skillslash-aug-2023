const mongoose = require("mongoose");
const Place = require("./models/places.model");

mongoose.connect("mongodb://localhost:27018/geo").then(() => {
  console.log("Connected to Mongo!");

  Place.find({
    location: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [13.0154820, 77.7338090],
        },
      },
    },
  }).then((places) => {
    console.log(places);
    mongoose.connection.close();
  });
});
