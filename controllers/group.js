const mongoose = require('mongoose');
const { Group, Member } = require('../models/group');

const createGroup = (req, res) => {
  const { password, name, limit } = req.body;

  const group = new Group({ password, name, limit });

  group.save(err => {
    if (err) {
      return res.json({
        message: 'Sorry, a group with that name already exists.',
      });
    }
    res.json({ message: 'New group created' });
  });
};

const joinGroup = (req, res) => {
  const { pwd } = req.params;

  Group.findOne({ password: pwd }, (err, data) => {
    if (!data) return res.json({ message: `Group: ${pwd} does not exist!` });
    return res.redirect(`/${pwd}/addmember`);
  });
};

const addMember = (req, res) => {
  const { member } = req.body;
  const { group } = req.params;
  Group.updateOne({ password: group }, { $push: { members: member } }, err => {
    if (err) return res.json(err);
    return res.json({ message: 'Member added successfully' });
  });
};

const viewGroups = (req, res) => {
  Group.find({})
    .lean()
    .exec((err, group) => {
      return res.json(group);
    });
};

module.exports = { createGroup, joinGroup, viewGroups, addMember };
