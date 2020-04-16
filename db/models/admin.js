const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  account: String,
  secret: String
});

module.exports = mongoose.model('admins', adminSchema);
