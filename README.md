# MongoDB $inc operator error
This repository demonstrates a common error when using the `$inc` operator in MongoDB to update a field. The error occurs when providing a string instead of a numeric value to the `$inc` operator.
## Problem
The provided code attempts to increment the age field of a document in a MongoDB collection using the `$inc` operator with a string value. This results in an error because `$inc` expects a numeric value.
## Solution
The solution involves ensuring that the value provided to the `$inc` operator is a number. The corrected code shows how to properly increment the `age` field using a numeric value.
