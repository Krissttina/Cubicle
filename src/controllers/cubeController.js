const router = require('express').Router(); 

const cubeManager = require('../managers/cubeManager');
const accessoryManager = require('../managers/accessoryManager');

//Path /cubes/create
router.get('/create', (req, res) => { //action#1 serve form
    res.render('create');
});

router.post('/create', async (req, res) => { //action#2 accept data after form is submited
    const { //validate data
        name,
        description,
        imgUrl,
        difficultyLevel,
    } = req.body; // get data and save 

    await cubeManager.create({ //expects concrete data
        name,
        description,
        imgUrl,
        difficultyLevel: Number(difficultyLevel),
    });

    res.redirect('/'); //redirect to main page after submit form
});

router.get('/:cubeId/details', async (req, res) => {
    const cube = await cubeManager.getOne(req.params.cubeId).lean();
    //lean() resolves the problem with the documentation part
    //lean() izvajda stoinostite v modela


    if(!cube){
        return res.redirect('/404');
    }

    res.render('details', { cube });
});

//accessory attach

router.get('/:cubId/attach-accessory', async (req, res) => {
    const cube = await cubeManager.getOne(req.params.cubeId).lean();
    const accessories = await accessoryManager.getAvailable(cube.accessories).lean();
    const hasAccessories = accessories.length > 0;

    res.render('accessory/attach', { cube, accessories, hasAccessories });
});

router.post('/:cubeId/attach-accessory', async (req, res) => {
    const { accessory } = req.body;
    const cubeId = req.params.cubeId;

    await cubeManager.attachAccessory(cubeId, accessory);

    res.redirect(`/cubes/${cubeId}/details`);
})

module.exports = router;