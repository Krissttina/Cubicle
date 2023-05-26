const express = require('express'); //get express by express library

const expressConfig = require('./config/expressConfig');
const hbsConfig = require('./config/hbsConfig');

const app = express(); //create instance
const PORT = 5000; //port value

expressConfig(app);
hbsConfig(app);

//Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));