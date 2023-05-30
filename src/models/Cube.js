const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: String,
    description: String,
    imgUrl: String,
    difficultyLevel: Number,
    accessories: [{
        type: mongoose.Types.ObjectId,
        ref: 'Accessory' //imeto na modela kum koito referira accessory poleto
    }]
});

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;