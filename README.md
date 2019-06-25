## Simple Node Server Library
This project is meant to provide simple setup of a node api. Cloning the project into the ng's "projects" directory should allow requests to be served with mimimal setup.

Setup
```
$ cd ./PATH_TO/MY_APP/projects
$ git clone https://github.com/DavidStreid/node-api.git
$ my_api={NAME_YOUR_API}
$ mv node-api my_api
$ cd $my_api
$ api_path=$(pwd)
$ npm install
```

### Development of Server endpoints
If you have mongo installed, start up mongo. If not, proceed to next step (NOTE - No db will be used and you should see "Unable to connect to Mongo" on startup)
```
$ mongod
```
```
$ cd $api_path      # from "Setup" section
$ nodemon server.js
```
