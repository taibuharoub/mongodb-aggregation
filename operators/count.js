/**
 * allDocumentsCount becomes the key in the result
 * allDocumentsCount is just a string
 * returns the total number of doucments in the
 * persons collection
 * allDocumentsCount is just name, it can be anything
 */
db.persons.aggregate([{ $count: "allDocumentsCount" }]);
// result
// { "allDocumentsCount" : 12 }

//Different count methods
// 1
db.persons.aggregate([]).toArray().length;

// 2
db.persons.aggregate([]).itcount();

//group and count
db.persons.aggregate([
  { $group: { _id: "$company.location.country" } },
  { $count: "countriesCount" },
]);
db.persons.aggregate([
  { $group: { _id: { eyeColor: "$eyeColor", age: "$age" } } },
  { $count: "countriesCount" },
]);
db.persons.aggregate([
  // stage 1
  { $match: { age: { $gte: 25 } } },
  // stage 2
  { $group: { _id: { eyeColor: "$eyeColor", age: "$age" } } },
  // stage 3
  { $count: "countriesCount" },
]);
