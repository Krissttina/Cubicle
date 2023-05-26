//MODULAR ROUTER

//get express by express library
//get router 
//return instance of router
const router = require('express').Router(); 
const cubeManager = require('../managers/cubeManager');

router.get('/', (req, res) => { 
    const { search, from, to } = req.query;
    const cubes = cubeManager.getAll(search, from, to);

    res.render('index', { cubes, search, from, to });
});

router.get('/about', (req, res) => {
    res.render('about');
});

//404
router.get('/404', (req, res)=>{
    res.render('404');
});

module.exports = router;