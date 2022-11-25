const mongoose = require('mongoose');
dbUrl = process.env.MONGO_URI;
mongoose.connect(dbUrl);
const db = mongoose.connection;
// error
db.on('error', console.error.bind(console, 'erroe connecting to db'));
// up and running then message
db.once('open', function () {
  console.log('Success fully connected to the database');
});
module.exports = db;
