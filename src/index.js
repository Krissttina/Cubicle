const express = require('express'); //get express by express library

const app = express(); //create instance
const PORT = 5000; //port value

app.get('/', (req, res) => {
    res.send('Hello from express');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));