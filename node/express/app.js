var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get("/books/:bookId", function (req, res) {
    let showBook = req.params.bookId;
    res.send(`hej till books routern! Visa info om ${showBook}`);
});

app.get("/buss/:from/:to", function (req, res) {
    res.send(`Visar bussresor från ${req.params.from} till ${req.params.to}.`);
});

app.get("/form", function (req, res) {

    let printForm = `<h1>hej</h1>
                    <form action="saveuser" method="post">Vad heter du?<br>
                    <input type="text" name="userName">
                    <button>Skicka</button></form>`

    res.send(printForm);

});

app.post("/saveuser", function (req, res) {

    res.send(`Hej på dig ${req.body.userName}`)

});

app.get("/json", function (req, res) {

    let users = [{ userName: "Janne", email: "janne@mail.com" }, { userName: "Panne", email: "panne@mail.com" }]

    res.json(users);

});

app.get("/test", function (req, res) {
    res.sendFile("public/test.html", { root: __dirname });
});

module.exports = app;
