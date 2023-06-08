const { promisify } = require('util');
const jsonwebtoken = require('jsonwebtoken'); //dont work with primiss

//promissify makes it work with promises /|\

const jwt = {
    sign: promisify(jsonwebtoken.sign),
    verify: promisify(jsonwebtoken.verify),
};

module.exports = jwt;