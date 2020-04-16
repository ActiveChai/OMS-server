const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  id: Number,
  title: String,
  budget: String,
  expect: String,
  description: String,
  category: String,
  publishTime: Number
});

module.exports = mongoose.model('projects', projectSchema);
