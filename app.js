var express = require('express');
var logger = require('morgan');
const CORS = require('cors');

var indexRouter = require('./routes/index');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(CORS());

app.use('/', indexRouter);

app.use(CORS());

module.exports = app;
