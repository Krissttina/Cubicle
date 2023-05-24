## Workshop-Cubicle
SoftUni Web JS Workshop #1 exercise

Notes
1. Sourse code should be put in src folder, the root dir is meant to be filled with rm, gitignore, json, configurations etc 'conf files'
2. Everything included in the gitignore file will not be commited to the GitHub repo
3. Packages should not be commited

Installation
1. npm init -y -> for initializing a project(info can be later updated)
2. npm i nodemon -D -> for downloading nodemon as devDependency(package which will not be included in the deployed project)
3. npm i express -> install express

Steps
1. Config scripts-start command in package.json: 'nodemon src/index.js' -> so when this is written in the console the server will start working along with nodemon
2. Set the home page path and create the server by setting its port, finally test if it s working