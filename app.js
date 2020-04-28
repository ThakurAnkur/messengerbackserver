var createError = require('http-errors');

var session = require('express-session')
const MongoStore = require('connect-mongo')(session);
const dbUri = require('./database/db').dbUri;

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');
var cors = require('cors')

var app = module.exports.app = exports.app = express();
console.log("Server starting");
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
  secret: "Shh, its a secret!",
  store: new MongoStore({
    url: dbUri,
    dbName: 'test-app'
  })
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.options('*', cors())
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);
// catch 404 and forward to error handler

app.use(function (req, res, next) {
  next(createError(404));
});

// app.use(require('connect-livereload')());

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
