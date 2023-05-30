const router = require('express').Router();

const accessoryManager = require('../managers/accessoryManager');

router.get('/create', (req, res) => {
    res.render('accessory/create');
});

router.post('/create', async (req, res) => { //accessory can be created
    //TODO: add accessory data to db
    const { name, description, imgUrl } = req.body;

    await accessoryManager.create({ name, description, imgUrl });

    res.redirect('/');
})

module.exports = router;