use("geo");

db.places.insertOne({
  name: "Provident Capella",
  address:
    "Soukya Rd, Bengaluru, Karnataka 562114",
  location: {
    type: "Point",
    coordinates: [13.0154803,77.7338072],
  },
});
