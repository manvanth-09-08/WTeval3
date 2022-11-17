// Create table
// var mysql = require("mysql");
// var con = mysql.createConnection({
//   host: "127.0.0.1",
//   user: "root",
//   password: "",
//   database: "ola",
// });

// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql =
//     "CREATE TABLE passenger(id integer,name varchar(255), fromAdd varchar(255), toAdd varchar(255),distance integer, fare integer);";
//   //   var sql = "SELECT * from number";
//   con.query(sql, function (err, result) {
//     if (err) throw err;

//     console.log();
//   });
// });

// Insert into tables

// var mysql = require("mysql");
// var con = mysql.createConnection({
//   host: "127.0.0.1",
//   user: "root",
//   password: "",
//   database: "ola",
// });

// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = [
//     "INSERT INTO passenger (id,name,fromAdd,toAdd,distance,fare) VALUES (2,'Rajesh','vidyanagar','airport',5,50)",
//     "INSERT INTO passenger (id,name,fromAdd,toAdd,distance,fare) VALUES (3,'Raj','vidyanagar','airport',5,50)",
//     "INSERT INTO passenger (id,name,fromAdd,toAdd,distance,fare) VALUES (4,'Manjesh','vidyanagar','banglore',300,3000)",
//     "INSERT INTO passenger (id,name,fromAdd,toAdd,distance,fare) VALUES (5,'Manja','vidyanagar','navnagar',10,100)",
//   ];
//   for (var i = 0; i < sql.length; i++) {
//     con.query(sql[i], function (err, result) {
//       if (err) throw err;
//       console.log("1 record inserted");
//     });
//   }
// });

//Create username databse
// var mysql = require("mysql");
// var con = mysql.createConnection({
//   host: "127.0.0.1",
//   user: "root",
//   password: "",
//   database: "ola",
// });

// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE username(name varchar(255), password varchar(255));";
//   //   var sql = "SELECT * from number";
//   con.query(sql, function (err, result) {
//     if (err) throw err;

//     console.log();
//   });
// });

//Insert into username table
var mysql = require("mysql");
var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "ola",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = [
    "INSERT INTO username (name,password) VALUES ('admin','admin')",
    "INSERT INTO username (name,password) VALUES ('Rajesh','123')",
    "INSERT INTO username (name,password) VALUES ('Raj','123')",
    "INSERT INTO username (name,password) VALUES ('Manjesh','123')",
    "INSERT INTO username (name,password) VALUES ('Manja','123')",
  ];
  for (var i = 0; i < sql.length; i++) {
    con.query(sql[i], function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  }
});
