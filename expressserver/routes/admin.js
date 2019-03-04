const express = require('express');
// const path = require('path');
// const rootDir = require('../path/pathfinder')
const router = express.Router();
const contactsController = require("../controllers/contact");


// this is /admin/contact -> GET
router.get('/contact', contactsController.getContact)

// this is /admin/contact -> POST
router.post('/contact', contactsController.postContact)


module.exports = router;