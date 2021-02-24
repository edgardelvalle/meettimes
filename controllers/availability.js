const Availability = require('../models/availability');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({ availabilities: [] }).write();

module.exports = function getAvailabilities(req, res) {
  res.json(db);
};

module.exports = function addAvailablity(req, res) {
  // const availability = new Availability(
  //   req.body.user,
  //   req.body.monday,
  //   req.body.tuesday,
  //   req.body.wednesday,
  //   req.body.thursday,
  //   req.body.friday,
  //   req.body.saturday,
  //   req.body.sunday
  // );
  // db.get('availabilities').push(availability).write();
  res.redirect('/availabilities');
};

module.exports = function getUserAvailability(req, res) {
  const user = req.params.user;
  res.json(db.get('availabilities').find({ user: user }).value());
};
