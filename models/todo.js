const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const TodoSchema = new Schema({
  name: String,
  status: String,
}, {timestamps: true});


module.exports = mongoose.model('todo', TodoSchema)