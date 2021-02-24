const express = require('express');
const router = express.Router();

const {
  createGroup,
  joinGroup,
  viewGroups,
  addMember,
} = require('../controllers/group');

router.post('/creategroup', createGroup);

router.get('/joingroup/:pwd', joinGroup);

router.get('/:group/addmember', addMember);

router.get('/viewgroups', viewGroups);

// router.get('/joingroup/:pwd', joinGroup);

module.exports = router;
