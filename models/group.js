const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MemberSchema = new Schema({
  name: String,
});

const GroupSchema = new Schema({
  password: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  limit: {
    type: Number,
    required: true,
  },
  members: [
    {
      name: String,
    },
  ],
  expireAt: {
    type: Date,
    default: Date.now(),
    index: { expires: '1m' },
  },
});

const Group = mongoose.model('Group', GroupSchema);
const Member = mongoose.model('Member', MemberSchema);
module.exports = { Group, Member };
