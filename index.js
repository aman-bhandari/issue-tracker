require('dotenv').config();
const express = require('express');
const app = express();
const expressLayout = require('express-ejs-layouts');
app.use(expressLayout);
const db = require('./config/mongoose');
// const sassMiddleWare = require('node-sass-middleware');
app.use(express.urlencoded());
app.use('/', require('./routes'));
port = process.env.PORT || 8000;
const path = require('path');
// node-sass-middleware configuration
// app.use(
//   sassMiddleWare({
//     src: './assets/scss',
//     dest: './assets/css',
//     debug: true,
//     outputStyle: 'extended',
//     prefix: '/css',
//   })
// );

app.use(express.static('./assets'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.listen(port, function (err) {
  if (err) {
    console.log(`error in running ${err}`);
    return;
  }
  console.log(`server is running @ ${port}`);
});
