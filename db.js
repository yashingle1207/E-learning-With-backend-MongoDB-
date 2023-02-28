var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/database";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.createCollection("customers", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  });
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = { name: "Company Inc", address: "Highway 37" };
    dbo.collection("customers").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });

  
  // MongoClient.connect(url, function(err, db) {
  //   if (err) throw err;
  //   var dbo = db.db("mydb");
  //   dbo.collection("customers").findOne({}, function(err, result) {
  //     if (err) throw err;
  //     console.log(result.name);
  //     db.close();
  //   });
  // });
  // MongoClient.connect(url, function(err, db) {
  //   if (err) throw err;
  //   var dbo = db.db("mydb");
  //   var myquery = { address: 'Mountain 21' };
  //   dbo.collection("customers").deleteOne(myquery, function(err, obj) {
  //     if (err) throw err;
  //     console.log("1 document deleted");
  //     db.close();
  //   });
  // });
  // MongoClient.connect(url, function(err, db) {
  //   if (err) throw err;
  //   var dbo = db.db("mydb");
  //   var myquery = { address: "Valley 345" };
  //   var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
  //   dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
  //     if (err) throw err;
  //     console.log("1 document updated");
  //     db.close();
  //   });
  // });
  // MongoClient.connect(url, function(err, db) {
  //   if (err) throw err;
  //   var dbo = db.db("mydb");
  //   dbo.collection("customers").drop(function(err, delOK) {
  //     if (err) throw err;
  //     if (delOK) console.log("Collection deleted");
  //     db.close();
  //   });
  // });

  