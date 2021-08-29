db.persons.aggregate([{ $sort: { name: 1 } }]).pretty();

db.persons.aggregate([{ $sort: { name: 1, gender: 1 } }]).pretty();

// group and sort
db.persons.aggregate([
  { $group: { _id: "$favoriteFruit" } },
  { $sort: { _id: 1 } },
]);
db.persons.aggregate([{ $group: { _id: "$age" } }, { $sort: { _id: 1 } }]);

db.persons.aggregate([
  {
    $group: { _id: { eyeColor: "$eyeColor", favoriteFruit: "$favoriteFruit" } },
  },
  { $sort: { "_id.eyeColor": 1, "_id.favoriteFruit": -1 } },
]);
db.persons.aggregate([
  { $match: { eyeColor: { $ne: blue } } },
  {
    $group: { _id: { eyeColor: "$eyeColor", favoriteFruit: "$favoriteFruit" } },
  },
  { $sort: { "_id.eyeColor": 1, "_id.favoriteFruit": -1 } },
]);
