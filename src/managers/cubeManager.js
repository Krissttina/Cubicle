const Cube = require('../models/Cube');

exports.getAll = async (search, from, to) => {
  //copy and return reference of the array
  let result = await Cube.slice().lean();
    //search filter logic
  if (search) {
    result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
  }

  if(from){
    result = result.filter(cube => cube.difficultyLevcel >= Number(from));
  }

  if(to){
    result = result.filter(cube => cube.difficultyLevcel <= Number(to));
  }
  return result;
};


exports.create = async (cubeData) => {
  const cube = new Cube(cubeData); //creates mongoose document(objects with additional funcionalities)

  await cube.save();

  return cube;
};