const express = require('express'); //get express by express library
const handlebars = require('express-handlebars'); //set up handlebars
const path = require('path'); //path module for setting styling

const app = express(); //create instance
const PORT = 5000; //port value

//Handlebars config
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', 'src/views');

//Express config
app.use(express.static(path.resolve(__dirname, 'public')));

//Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));