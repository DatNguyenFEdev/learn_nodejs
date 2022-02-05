// const path = require('path')
// const express = require('express')
// const app = express()
// const port = 3000
// const morgan = require('morgan')
// app.use(morgan('combined'))
// app.set('view', path.join(__dirname, 'resources\\views'));

// app.get('/', (req, res) => {
//   res.send(`<h1> Trang chủ! </h1>`)
//   res.render('home');
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

var express = require("express");
var router = require("./routerMain");
var db = require("./config/db")

// Connect
db.connect();

var moment = require('moment'); 
moment().format();

var bodyParser = require('body-parser')
const AccountModel = require('./models/todo')
// var todoController = require('./controller/todoController')
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(3000);
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use("/", router);
// require moment
app.locals.moment = require('moment');