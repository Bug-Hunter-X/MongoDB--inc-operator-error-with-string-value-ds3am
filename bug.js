```javascript
//Incorrect usage of $inc operator for updating a field in MongoDB
db.collection('myCollection').updateOne({name: "John"}, {$inc: {age: '1'}});
```