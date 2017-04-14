# Donéalo

### Install Meteor

`curl https://install.meteor.com/ | sh)`

### Run home application (for regular users)

`cd home/` 

`npm install`

This app will use the same db as admin.

Run it with:

`MONGO_URL=mongodb://localhost:3001/meteor meteor --port 3100`


### Run admin application (for orgs)

`cd admin/`

`npm install`

`meteor run`
