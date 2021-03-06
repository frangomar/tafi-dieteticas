var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
var indexRouter = require('./routes/index');
var productsRouter = require('./routes/products');
var usersRouter = require('./routes/users');
const productCartRouter = require("./routes/carrito.js");
var apiRouter = require ('./routes/apiRouter');
const { application } = require('express');
const methodOverride = require ('method-override');
const session = require ("express-session");
const userLoggedMiddleware = require ("./middelwares/userLoggedMiddleware");
const port = process.env.PORT || 3001 ;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(methodOverride('_method'));
app.use(session({
  secret: "Mensaje secreto",
  resave: true,
  saveUninitialized: true
}));
app.use (userLoggedMiddleware);
//app.use(bcryptjs())
app.use("/carritoDeCompras",productCartRouter)


app.use('/', indexRouter);
app.use( '/products',productsRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);


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
