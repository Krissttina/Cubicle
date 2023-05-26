## Workshop-Cubicle
SoftUni Web JS Workshop #1 exercise

Notes
1. Sourse code should be put in src folder, the root dir is meant to be filled with rm, gitignore, json, configurations etc 'conf files'
2. Everything included in the gitignore file will not be commited to the GitHub repo
3. Packages should not be commited
4. By default Handlebars is searching for the **views** folder in the root dir
so when the folder is nested in another one so the real location
it must be set as well 
5. **path resolve** creates absolute path from relative path
6. In the form /create.hbs/ their is an action -> where we want to send the data after the form is submited /by default if nothing is set the data is sended to the page itself-to the path it came in/
and a method -> with what method we want to send the data /get or post/->get put all the send data in the url as query string /not gud/ -> post - like hidden data in the request
7. **require** can work directly with json files

Installation
1. npm init -y -> for initializing a project(info can be later updated)
2. npm i nodemon -D -> for downloading nodemon as devDependency(package which will not be included in the deployed project)
3. npm i express -> install express
4. npm i express-handlebars -> install handlebars library

Steps
1. Config scripts-start command in package.json: 'nodemon src/index.js' -> so when this is written in the console the server will start working along with nodemon
2. Set the home page path and create the server by setting its port, finally test if it s working/set express to the app/
3. Set up Handlebars
- installing
- config
4. Render main page/index/
5. Conf the main layout
6. Fix css styles by express config
7. Set path to handle styling
8. Work on the architecture
- config folder
9. Controllers - module who has logicly connected actions
Modular router -
10. cube controller
11. add cube page display
12. save data from form /add cube/
13. managers/services
- purpose: manage the cube data
14. Visualize custom cubes
- get cubes by the manager /in homecontroller/
- use template