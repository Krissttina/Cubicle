const express = require("express"); //get express by express library

const expressConfig = require("./config/expressConfig");
const hbsConfig = require("./config/hbsConfig");
const homeController = require("./controllers/homeControllers");
const cubeController = require("./controllers/cubeController");
const dbConnect = require("./config/dbConf");

const app = express(); //create instance
const PORT = 5000; //port value

expressConfig(app);
hbsConfig(app);

dbConnect()
  .then(() => console.log("DB Connected successfully"))
  .catch(err => console.log(`DB errpr: ${err}`));

app.use(homeController);
app.use("/cubes", cubeController);
app.get("*", (req, res) => {
  //where * is called wild card and means everything
  res.redirect("/404");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
