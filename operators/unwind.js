//unwind and project
//blew is not a real world example, its supposed to
//make understand what happens when you perform
//unwind operation
db.persons
  .aggregate([
    { $unwind: "$tags" },
    { $project: { name: 1, gender: 1, tags: 1 } },
  ])
  .pretty();

//mostly used example, unwind is used with group stage
db.persons.aggregate([{ $unwind: "$tags" }, { $group: { _id: "$tags" } }]);
