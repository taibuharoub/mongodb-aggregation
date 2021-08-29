//documents from the group stage will be written
//to the aggreationResults collection
db.persons.aggregate([
  { $group: { _id: { age: "$age", eyeColor: "$eyeColor" } } },
  { $out: "aggreationResults" },
]);
