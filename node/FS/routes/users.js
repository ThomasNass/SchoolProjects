var express = require('express');
var router = express.Router();

//importerar filesystem för att kunna använda det
const fs = require("fs");
const { mainModule } = require('process');

/* GET users listing. */
router.get('/', function (req, res, next) {

  fs.readFile("users.json", function (err, data) {
    if (err) {
      console.log(err);
    }

    const users = JSON.parse(data);

    res.send(users)
    return;

  });
});

//Vanligtvis använder man post och inte get när man ska skriva till en fil
router.get('/add', function (req, res, next) {

  fs.readFile("users.json", function (err, data) {
    if (err) {
      console.log(err);

      if (err.code == "ENOENT") {
        console.log("Filen finns inte");

        let users = [{ "userName": "Harry", "userEmail": "harry@mail.com" }];

        fs.writeFile("users.json", JSON.stringify(users, null, 2), function (err) {
          if (err) {
            console.log(err);
          }
        });
        res.send("Fil skapad och ny användare sparad")
        return;
      }

      res.send("404 - Något gick galet");
    }

    const users = JSON.parse(data);
    let newUser = { "userName": "Harry", "userEmail": "harry@mail.com" }

    users.push(newUser);
    //JSON.stringify tar 3 parametrar:
    //1.Det vi vill skicka in, 
    //2. om vi vill manipulera, 
    //3. formatering. Här används 2 för att indentera, så att filen users.json behåller sitt format
    fs.writeFile("users.json", JSON.stringify(users, null, 2), function (err) {
      if (err) {
        console.log(err);
      }
    });

    res.send(users)
    return;

  });
});

module.exports = router;
