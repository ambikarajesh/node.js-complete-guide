const contacts = [];

exports.getContact = (req,res,next)=>{
    res.render('adminView', {
        title:'Contact',
        path:'/admin/contact',
        contact:true
    });
}

exports.postContact = (req,res, next)=>{
    contacts.push(req.body)
    res.redirect('/');
}
exports.getContacts = (req,res,next)=>{
    res.render('shopView', {
        title:"Home",
        contacts:contacts,
        path:'/',
        hasContacts:contacts.length>0,
        shop:true
    });
}