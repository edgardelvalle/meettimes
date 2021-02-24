const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const jsonParser = bodyParser.json();
const getAvailabilities = require('../controllers/availability');
const addAvailablity = require('../controllers/availability');
const getUserAvailability = require('../controllers/availability');

router.get('/availabilities', getAvailabilities);

router.post('/add-availability', jsonParser, addAvailablity);

router.get('/availabilities/:user', getUserAvailability);

module.exports = router;
