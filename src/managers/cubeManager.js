const cubes = [];

exports.getAll = (search, from, to) => {
  //copy and return reference of the array
  let result = cubes.slice();
    //search filter logic
  if (search) {
    result = result.filter((cube) => cube.name.toLowerCase().includes(search.toLowerCase()));
  }

  if(from){
    result = result.filter(cube => cube.difficultyLevcel >= Number(from));
  }

  if(to){
    result = result.filter(cube => cube.difficultyLevcel <= Number(to));
  }
  return result;
};

exports.getOne = (cubeId) => cubes.find((x) => x.id == cubeId);

exports.create = (cubeData) => {
  const newCube = {
    id: cubes.length + 1,
    ...cubeData,
  };

  cubes.push(newCube);

  return newCube;
};
