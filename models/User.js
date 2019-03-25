const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  pictures: String
});

module.exports = mongoose.model('User', UserSchema);
