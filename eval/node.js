const mysql = require("mysql");
const express = require("express");
var bodyParser = require("body-parser");

const con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "ola",
});

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", function (request, response) {
  response.sendFile("D:\\WebDevelopmentCollege\\eval\\index.html");
});

app.post("/user", function (request, response) {
  var from = request.body.from;
  var to = request.body.to;
  var sql =
    "select name from passenger where fromAdd='" +
    from +
    "' and toAdd='" +
    to +
    "'";
  var list = [];
  con.query(sql, function (err, result) {
    if (err) throw err;

    if (result.length > 0) {
      for (var i = 0; i < result.length; i++) {
        list.push(result[i].name);
      }
      console.log(list);
      var rr = "<html>";
      rr += "<body>";
      rr += "<h2>Passenger List going from vidyanagar to airport</h2>";
      rr += "<ul>";
      for (var i = 0; i < list.length; i++) {
        rr += "<li>" + list[i] + "</li>";
      }
      rr += "</ul>";
      rr = rr + "</body>";
      rr = rr + "</html>";

      response.send(rr);
    } else {
      response.send("No passenger found");
    }
  });
});

app.post("/update", function (request, response) {
  var amount = request.body.amount;
  var sql =
    "update passenger set fare= distance *'" + amount + "'where distance > 100";
  con.query(sql, function (err, result) {
    if (err) throw err;

    console.log("Records updated");
  });
  response.send("Values updated");
});

app.get("/admin", function (request, response) {
  var rr = "<html>";
  rr = rr + "<body>";
  rr += "<form method='post' action='/update'>";
  rr += ' <input type="number" placeholder="Amount" name="amount">';
  rr += ' <input type="submit" value="Update" />';
  rr += "</form>";
  rr = rr + "</body>";

  response.send(rr);
});

app.get("/userPage", function (request, response) {
  response.sendFile("D:\\WebDevelopmentCollege\\eval\\user.html");
});

app.post("/auth", function (request, response) {
  let username1 = request.body.name;
  let password1 = request.body.password;

  if (username1 && password1) {
    con.query(
      "SELECT * FROM username WHERE name = ? AND password = ?",
      [username1, password1],
      function (error, results, fields) {
        if (error) throw error;

        if (results.length > 0) {
          if (username1 == "admin") {
            response.redirect("/admin");
          } else {
            response.redirect("/userPage");
          }
        } else {
          response.send("Incorrect Username and/or Password!");
        }
        response.end();
      }
    );
  }
});

app.listen("3000", () => {
  console.log("Server started on PORT 3000");
});
