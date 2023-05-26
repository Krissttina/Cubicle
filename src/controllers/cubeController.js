const router = require('express').Router(); 

const cubeManager = require('../managers/cubeManager');

//Path /cubes/create
router.get('/create', (req, res) => { //action#1 serve form
    console.log(cubeManager.getAll());
    res.render('create');
});

router.post('/create', (req, res) => { //action#2 accept data after form is submited
    const { //validate data
        name,
        description,
        imgUrl,
        difficultyLevel,
    } = req.body; // get data and save 

    cubeManager.create({ //expects concrete data
        name,
        description,
        imgUrl,
        difficultyLevel: Number(difficultyLevel),
    });

    res.redirect('/'); //redirect to main page after submit form
});

router.get('/:cubeId/details', (req, res) => {
    res.render('details');
});

module.exports = router;