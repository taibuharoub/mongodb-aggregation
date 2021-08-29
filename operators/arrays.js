db.persons.aggregate([{ $group: { _id: "$tags" } }]);
