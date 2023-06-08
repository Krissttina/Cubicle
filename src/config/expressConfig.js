const express = require("express"); //get express by express library
const path = require("path"); //path module for setting styling
const cookieParser = require('cookie-parser');
const { auth } = require('../middlewares/auth');

function expressConfig(app) {
  //Express config
  app.use(express.static(path.resolve(__dirname, "../public")));
  // app.use(express.static('src/public')); //-> can be used also

  //middleware 
  //when data is send from form this mdl will parse them as js obj and put them on req.body
  //also parses query string
  app.use(express.urlencoded({extended: false})) //-> if true qs library
  app.use(cookieParser());
  app.use(auth);
}

module.exports = expressConfig;
