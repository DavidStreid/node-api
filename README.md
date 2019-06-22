## Simple Node Server Library
This project is meant to provide simple setup of a node api. Cloning the project into the projects directory should allow requests to be served with mimimal setup.

Setup
```
$ cd ./PATH_TO/MY_APP
$ dir=$(pwd)
$ cd projects
$ git clone ...
$ my_api={NAME_YOUR_API}
$ mv node-api my_api
$ cd $dir
$ npm install projects/my_api
```

### Development of Server endpoints
If you have mongo installed, start up mongo. If not, proceed to next step (NOTE - No db will be used and you should see "Unable to connect to Mongo" on startup)
```
$ mongod
```
```
$ cd $dir                            # dir from 'Setup'
$ nodemon projects/my_api/server.js
```
