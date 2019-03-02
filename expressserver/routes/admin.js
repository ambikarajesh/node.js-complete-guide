const express = require('express');
const path = require('path');
const rootDir = require('../path/pathfinder')
const router = express.Router();


// this is /admin/contact -> GET
router.get('/contact', (req,res,next)=>{
    res.sendFile(path.join(rootDir, "views", "adminView.html"));
})

// this is /admin/contact -> POST
router.post('/contact', (req,res, next)=>{
    console.log(req.body);
    res.redirect('/admin/contact');
})


module.exports = router;