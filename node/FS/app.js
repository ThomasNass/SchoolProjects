var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: true });

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

app.get("/hello", function (req, res) {

    let html = "";
    html += "<body>";
    html += "<form action='/sayhello' method='post' name='form1'>";
    html += "Name: <input type='text' name='name'> <br/>";
    html += "<input type='submit' value='submit'> <br/>";
    html += "</form>";
    html += "</body>";
    res.send(html);

});

app.post('/sayhello', urlencodedParser, function (req, res) {

    let reply = '';
    reply += `<br/> Well hello ${req.body.name}`;

    res.send(reply);
})

module.exports = app;
