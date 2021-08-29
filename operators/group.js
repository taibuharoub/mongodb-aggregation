//groups certain documents by certain expressions
//_id is mandatory field, must persent in every group stage

db.persons.aggregate([{ $group: { _id: { age: "$age", gender: "$gender" } } }]);

/**
 * Examples
 */
db.persons.aggregate([{ $group: { _id: "$age" } }]);

//group by nested fields
db.persons.aggregate([{ $group: { _id: "$company.location" } }]);

db.persons.aggregate([{ $group: { _id: "$company.location.country" } }]);

//group by mutiple fields
db.persons.aggregate([{ $group: { _id: { age: "$age", gender: "$gender" } } }]);

db.persons.aggregate([
  { $group: { _id: { age: "$age", gender: "$gender", age: "$age" } } },
]); //more fields more documents

// combine match and group
db.persons.aggregate([
  { $match: { favoriteFruit: "banana" } },
  { $group: { _id: { age: "$age", eyeColor: "$eyeColor" } } },
]);

//group first and then maatch
db.persons.aggregate([
  { $group: { _id: { age: "$age", eyeColor: "$eyeColor" } } },
  { $match: { "_id.age": { $gt: 30 } } },
]);
