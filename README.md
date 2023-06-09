## Workshop-Cubicle
SoftUni JS Web  
Workshop

### Notes
    Part #1
1. Source code should be put in src folder, the root dir is meant to be filled with configuration files
2. Everything included in the gitignore file will not be committed to the GitHub repo
3. Packages should not be committed
4. By default Handlebars looks for the **views** folder in the root directory
so when the folder is nested inside another the real(absolute) location must be set 
5. **path resolve** creates absolute path from relative path
6. In the form (create.hbs) there is an **action** -> where we want to send the data after the form has been submitted (by default if nothing in 'action' is set the data is sended to the page itself where they came from - they are sended to the path it came in)
and a method -> with what method we want to send the data (GET or POST) -> GET - puts all sent data in the url as query string /not gud/ -> POST - sends them as hidden data in the request
7. **require** can work directly with json files
8. **Partial** is used for repeating, it should be used whenever an item is appearing multiple times
9. MVC
- M -> model
- C -> controller -> take the data from the manager/model and gives them to the view
- V -> view
10. 404 page should be done at the end of the work
- at index.js /routing/
- simply meaning: if the given url path does not fit anything of the paths the app has than go to 404 page
11. req.params -> for parameters
req.body -> for POST data from form which are send and parse
req.query -> everything in the url between ? and #(# may not be included) is called query string
    Part #2
1. service layer should not know about view model
2. Mongoose does not work with clear objects, instead it work with 'documents'(objects with additional funcionalities)
3. Hbs does not work with documents tho
    Part #3


### Installation
    Part #1
1. npm init -y -> for initializing a project(info can be later updated)
2. npm i nodemon -D -> for downloading nodemon as devDependency(package which will not be included in the deployed project)
3. npm i express -> install express
4. npm i express-handlebars -> install handlebars library
    
    Part #2
1. npm i mongoose -> installing mongoose and connect to db

    Part #3
1. npm i bcrybt -> encrypting passwords when validating(hash pswds)
2. npm i cookie-parser -> 
3. npm i jsonwebtoken ->

### Instructions
    Part #1
1. Config scripts-start command in package.json: 'nodemon src/index.js' -> so when this is written in the console the server will start working along with nodemon
2. Set the home page path and create the server by setting its port, finally test if it s working (set express to the app)
3. Set up Handlebars
- installing
- config
4. Render main page(index.hbs)
5. Conf the main layout
6. Fix css styles by express config
7. Set path to handle styling
8. Work on the architecture
- config folder
9. Controllers - module who has logically connected actions
Modular router -
10. cube controller
11. add-cube page display
12. save data from form /add cube/
13. managers/services
- purpose: manage the cube data
14. Visualize custom cubes
- get cubes from the manager /in homeController/
- use template
- warning if no cubes are entered 
15. Partial 
16. Details page
- cube controller config and manager pass the data
- correct individual details link
- use template
- redirect to home/back btn/
17. 404 page
18. Search working
- set hbs file action and method
- manager getALl enhanced with search logic
- controler sents search parameters too
- index.hbs value set

    Part #2
1. Install database
2. Create cubes in the db
- create mongoose model
    - when model is created it should be in a single person
- Cube model creates
- manager and controller changes
3. Display saved data from db
- getAll and getOne methods in manager conf
- lean()
4. Accessory
- CRUD operations
- accessoryContr.js
- post
- create Accessory manager
- create Accessory model
5. Accessory attach page
- add accessory to details page 
- add routing to the page
6. Create relation between the two databases
- determine the type of the relation
- models
7. Display all attached accessories

    Part #3
1. Refacturing structure; Additional nav options; set Register page and change to hbs
- create user controller to display the view
- set req.body data
2. set data from register in db
- validate pass
- save pass encrypted
3. Add log in view page
4. Browser should know when a user is loged, so there is cookie parser to help
- create token
- browser receives a cookie with that token
5. Add cube owner(person who created it)
6. Add additional cube Edit & Delete pages for the owner
- set pages
- call for them in cubeController
- delete in cubeManager
- show dinamicly generated dif lvl
7. Conditional btns
8. Conditional nav
9. logout
10. authentication route