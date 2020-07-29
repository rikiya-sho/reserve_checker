var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var helmet = require('helmet');
var basicAuth = require('basic-auth-connect');

//モデルの読み込み
var Schedule = require('./models/schedule');

//リレーション
Schedule.sync().then(() => {
  
});

var indexRouter = require('./routes/index');
var scheduleRouter = require('./routes/schedules');
var initRouter = require('./routes/init');
//var usersRouter = require('./routes/users');

var app = express();
app.use(helmet());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//ベーシック認証
//全体に適用
app.use('/schedules/*',basicAuth('master', 'edit'));
//schedules以下に適用//
/*app.all('/schedules/*', basicAuth(function(user, password) {
  return user === 'master' && password === 'edit';
}));*/

app.use('/', indexRouter);
app.use('/schedules', scheduleRouter);
app.use('/init', initRouter);
//app.use('/users', usersRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
