const mongoose = require('mongoose');
const connect = (opts = {}) => {
  const url = process.env.MONGODB_URL;
  mongoose.connect(url);
  mongoose.connection.once('open', () => {
    console.log('Connected to db');
  });
};

module.exports = connect;
