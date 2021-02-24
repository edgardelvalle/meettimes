const mongoose = require('mongoose');
const { Schema } = require('mongoose');

class Day {
  constructor({ startTime, endTime }) {
    this.startTime = startTime;
    this.endTime = endTime;
  }
}

const Availability = new Schema({
  monday: String,
  tuesday: String,
  wednesday: String,
  thursday: String,
  friday: String,
  saturday: String,
  sunday: String,
});

class Availabilityu {
  constructor({
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday,
  }) {
    this.monday = new Day(monday);
    this.tuesday = new Day(tuesday);
    this.wednesday = new Day(wednesday);
    this.thursday = new Day(thursday);
    this.friday = new Day(friday);
    this.saturday = new Day(saturday);
    this.sunday = new Day(sunday);
  }
}

module.exports = Availability;
