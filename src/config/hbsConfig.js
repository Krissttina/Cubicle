const handlebars = require('express-handlebars'); //set up handlebars

function hbsConfig(app){
    //Handlebars config
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', 'src/views');
}

module.exports = hbsConfig;