const express = require('express');
const path = require('path');
const rootDir = require('../path/pathfinder')
const router = express.Router();

router.get('/', (req,res,next)=>{
    res.sendFile(path.join(rootDir, "views", "shopView.html"));
})

module.exports = router;