const router = require('express').Router(); 

//Path /cubes/create
router.get('/create', (req, res) => { //action#1 serve form
    res.render('create');
});

router.post('/create', (req, res) => { //action#2 accept data after form is submited
    console.log(req.body); // get data and save
    res.redirect('/'); //redirect to main page after submit form
});

module.exports = router;