var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const config = require('./config/config')
var indexRouter = require('./routes/index');

var app = express();

const http = require('http');
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>');
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// connection url with database name to connect mongodb
// create a client to mongodb
global.mysql = require('mysql')
global._ = require('underscore')
global.q = require('q')
global.config = require('./config/config')
global.connectDatabase  = require('./utils/connection').connectDatabase

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
let port = process.env.PORT || config.server.port
let server = app.listen(port)
console.log('Api is running n port', port)

module.exports = app;
