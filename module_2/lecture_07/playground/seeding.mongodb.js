use("skillslash");

db.getCollection("users").insertMany([
  {
    name: "John Doe",
    age: 30,
    job: "Software Engineer",
    hobbies: ["Reading", "Coding"],
    address: [
      {
        city: "Delhi",
        state: "Delhi",
        country: "India",
        primary: true,
      },
      {
        city: "Noida",
        state: "Uttar Pradesh",
        country: "India"
      },
    ],
  },
  {
    name: "Jane Doe",
    age: 29,
    job: "Software Tester",
    hobbies: ["Reading", "Dancing"],
    address: [
      {
        city: "Bangalore",
        state: "Karnataka",
        country: "India",
      },
    ],
  },
  {
    name: "Anuj Garg",
    age: 19,
    job: "Electronics Engineer",
    hobbies: ["Books", "Coding"],
    address: [
      {
        city: "Brooklyn",
        state: "New York",
        country: "USA",
      },
      {
        city: "Delhi",
        state: "Delhi",
        country: "India",
      },
      
    ],
  },
  {
    name: "Rahul Kumar",
    age: 25,
    job: "Software Engineer",
    hobbies: ["Dancing", "Cooking"],
    address: [
      {
        city: "Pune",
        state: "Maharashtra",
        country: "India",
        primary: true,
      },
    ],
  },
]);
