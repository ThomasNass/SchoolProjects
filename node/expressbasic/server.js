const express = require("express");
const app = express();

app.listen(3000, function () {
    console.log("Servern är igång på port 3000");
});

app.get("/", function (req, res) {

    res.send("<h1>Hello world from Express!</h1>")

});