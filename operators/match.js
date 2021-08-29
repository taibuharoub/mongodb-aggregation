// match specific documents using query
/**
 * Example
 */

// {$match: {<query>}}

{
  $match: {
    city: "New York";
  }
}

{
  $match: {
    age: {
      $gt: 25;
    }
  }
}

{
  $match: {
    $and: [{ gender: "female" }, { age: { $gt: 25 } }];
  }
}

// match example
db.persons.aggregate([{ $match: { age: { $gt: 25 } } }]).pretty();

db.persons.aggregate([{ $match: { tags: { $size: 3 } } }]).pretty();
