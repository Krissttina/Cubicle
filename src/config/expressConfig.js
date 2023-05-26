const express = require("express"); //get express by express library
const path = require("path"); //path module for setting styling

function expressConfig(app) {
  //Express config
  app.use(express.static(path.resolve(__dirname, "../public")));
  // app.use(express.static('src/public')); //-> can be used also
  app.use(express.urlencoded({extended: false})) //-> if true qs library
}

module.exports = expressConfig;
