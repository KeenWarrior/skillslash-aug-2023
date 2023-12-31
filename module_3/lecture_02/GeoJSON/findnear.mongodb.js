use("geo");

db.places.findOne({
  location: {
    $near: {
      $geometry: {
        type: "Point",
        coordinates: [13.0154820, 77.7338090],
      },
      $maxDistance: 1000,
    },
  },
});
