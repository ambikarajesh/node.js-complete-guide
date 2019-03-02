const express = require('express');
const path = require('path');
const rootDir = require('../path/pathfinder');
const admin = require('./admin');
const router = express.Router();

router.get('/', (req,res,next)=>{
    res.render('shopView', {
        title:"Home",
        contacts:admin.contacts,
        path:'/'
    });
})

module.exports = router;