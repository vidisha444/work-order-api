var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const cors = require('cors')
var indexRouter = require('./routes/index');
const config = require('./config/config')

var app = express();

// connection url with database name to connect mongodb
// create a client to mongodb
global.mysql = require('mysql')
global._ = require('underscore')
global.q = require('q')
global.config = require('./config/config')
global.connectDatabase  = require('./utils/connection').connectDatabase

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', indexRouter);


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});
let port = process.env.PORT || config.server.port
let server = app.listen(port)
console.log('Api is running n port', port)

module.exports = app;