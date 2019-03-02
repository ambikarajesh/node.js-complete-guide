const express = require('express');
const path = require('path');
const rootDir = require('../path/pathfinder')
const router = express.Router();
const contacts = [];

// this is /admin/contact -> GET
router.get('/contact', (req,res,next)=>{
    res.render('adminView', {
        title:'Contact',
        path:'/admin/contact',
        contact:true
    });
})

// this is /admin/contact -> POST
router.post('/contact', (req,res, next)=>{
    contacts.push(req.body)
    res.redirect('/');
})


module.exports = {
    router,
    contacts
}