# Donéalo

### Install Meteor

`curl https://install.meteor.com/ | sh)`

### Run application

`npm install`

`npm start` or `meteor run`

### Run MongoDB locally

The app (home or admin) needs to be running in one session. Open a new terminal window (in the same app folder, home or admin) and type:

`meteor mongo`

This will start a shell prompt where you can run commands like: 

  - `show collections`: to print a list of all collections (equivalent to tables in a relational db) on the db.
  - `db.<collection_name>.find()`: to see all items in the collection. 
  - More commands in the [mongoDB shell reference](https://docs.mongodb.com/manual/reference/mongo-shell/)
  
### Deploy to Heroku 

`sh deploy.sh`

