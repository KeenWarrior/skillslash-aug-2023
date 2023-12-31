use("geo");

db.places.findOne({
  location: {
    $near: {
      $geometry: {
        type: "Point",
        coordinates: [12.953382, 77.6543798],
      },
      $maxDistance: 1000,
    },
  },
});
