# Donéalo

### Install Meteor

`curl https://install.meteor.com/ | sh)`

### Run both applications locally. 

`npm start`

### Run home application (for regular users) locally.

`cd home/` 

`npm install`

This app will use the same db as admin. Run it with:

`MONGO_URL=mongodb://localhost:3001/meteor meteor --port 3100`

### Run admin application (for orgs) locally.

`cd admin/`

`npm install`

`meteor run`

### Deploy to Heroku 

`sh deploy.sh`

