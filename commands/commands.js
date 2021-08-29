// aggregate without stages
db.persons.aggregate([]);

// Each stage starts from the stage operator pre-appended with $
// {$<stageOperator>: {}}

/**
 * Examples
 */
{
  $match: {
    age: {
      $gt: 20;
    }
  }
}
{
  $group: {
    _id: "$age";
  }
}
{
  $sort: {
    count: -1;
  }
}
