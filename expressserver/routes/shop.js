const express = require('express');
// const path = require('path');
// const rootDir = require('../path/pathfinder');
// const admin = require('./admin');
const router = express.Router();
const contactController = require('../controllers/contact');
router.get('/', contactController.getContacts)

module.exports = router;