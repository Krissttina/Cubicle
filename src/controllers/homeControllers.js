//MODULAR ROUTER

//get express by express library
//get router 
//return instance of router
const router = require('express').Router(); 

router.get('/', (req, res) => { 
    res.render('index');
});



module.exports = router;