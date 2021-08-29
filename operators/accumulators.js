// accumulator syntax
/**
 * Examples
 */
{
  $sum: "$quantity";
}
{
  $avg: "$age";
}
{
  $max: "$spentMoney";
}

//will count the quantity of documents in each group
db.persons.aggregate([{ $group: { _id: "$age", count: { $sum: 1 } } }]);

//count will represent number of occurances of each
//tag
db.persons.aggregate([
  { $unwind: "$tags" },
  { $group: { _id: "$tags", count: { $sum: 1 } } },
]);

// avg operator
db.persons.aggregate([
  { $group: { _id: "$eyeColor", avgAge: { $avg: "$age" } } },
]);
db.persons.aggregate([
  { $group: { _id: "$company.location.country", avgAge: { $avg: "$age" } } },
]);
