exports.error404 = (req,res,next)=>{
    //res.status(404).sendFile(path.join(rooDir, 'views', 'error.html'))
    res.status(404).render('error', {
        title:'Page not Found'
    })
}