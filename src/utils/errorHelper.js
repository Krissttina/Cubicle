const { MongooseError, Error } = require('mongoose');

exports.extractErrMsg = (error) => {
    if(error instanceof MongooseError){
        return Object.values(error.errors).map(x => x.message);
    }else if (error){
        return [error.message];
    }
};