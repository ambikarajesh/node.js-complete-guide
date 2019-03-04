const config = require('../config');
const ContactModel = require('../models/contact');


const contactModel = new ContactModel(config.data.contacts);


exports.getContact = (req,res,next)=>{
    res.render('adminView', {
        title:'Contact',
        path:'/admin/contact',
        contact:true
    });
}

exports.postContact = async(req,res, next)=>{
    contactModel.storeContact(req.body);
    res.redirect('/');
}
exports.getContacts = async (req,res,next)=>{
    const contacts = await contactModel.fetchContacts();
    res.render('shopView', {
        title:"Home",
        contacts:contacts,
        path:'/',
        hasContacts:contacts.length>0,
        shop:true
    });
}