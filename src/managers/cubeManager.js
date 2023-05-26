const cubes = [];

exports.getAll = () => cubes.slice(); //copy and return reference of the array

exports.create = (cubeData) => {
    const newCube = {
        id: cubes.length + 1,
        ...cubeData,
    };

    cubes.push(newCube);

    return newCube;
}