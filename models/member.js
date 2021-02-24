const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MemberSchema = new Schema({
  name: String,
});

const model = mongoose.model('Member', MemberSchema);
module.exports = model;
