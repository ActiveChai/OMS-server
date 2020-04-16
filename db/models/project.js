const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  id: Number,
  title: String,
  budget: String,
  expect: String,
  description: String,
  category: String,
  publishTime: Number,
});

//数据库文件名必须小写且要有s
module.exports = mongoose.model('projects', projectSchema);
