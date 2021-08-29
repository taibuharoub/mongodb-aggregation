db.persons
  .aggregate([{ $project: { name: 1, "company.location.country": 1 } }])
  .pretty();

db.persons.aggregate([
  { $project: { isActive: 1, name: 1, gender: 1 } },
  { $count: "total" },
]);

//rename and restructure documents
db.persons.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      info: {
        eyes: "$eyeColor",
        fruit: "$favoritrFruit",
        country: "$company.location.country",
      },
    },
  },
]);
