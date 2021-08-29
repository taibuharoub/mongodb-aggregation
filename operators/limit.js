// use case 1  as first stage
db.persons.aggregate([
  { $limit: 5 },
  { $match: { age: { $gt: 27 } } },
  { $group: { _id: "$company.location.country" } },
]);

//use case 2, after sort stage
db.persons.aggregate([
  { $match: { age: { $gt: 27 } } },
  { $group: { _id: "$company.location.country" } },
  { $limit: 5 },
]);
