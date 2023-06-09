const jwt = require('../lib/jwt');
const { SECRET } = require('../config/confg');

exports.auth = async (req, res, next) => {
    //check if cookie
    const token = req.cookies['auth'];

    if(token){
        //validate token
        try{
           const decodedToken = await jwt.verify(token, SECRET); 
           
           req.user = decodedToken;
           res.locals.user = decodedToken;
           res.locals.isAuth = true;

           next();
        }catch(err){
            res.clearCookie('auth');
            res.redirect('/users/login');
        }
    }else{
        next();
    }
    
};

//auth route
exports.isAuth = (req, res, next) => {
    if(!req.user){
        return res.redirect('/user/login');
    }

    next();
}