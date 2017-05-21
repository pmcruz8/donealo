import { Mongo } from 'meteor/mongo'; 
import { Accounts } from 'meteor/accounts-base'; 

Meteor.methods({
  'loginUser' : function(values) {

    console.log("login user" + values); 

    Accounts.validateNewUser((user) => {
      return user.username !== 'root';
    });
  },

  'createNewUser' : function(values) {
    console.log("create new user" + values); 

    Accounts.createUser({
      email: values.email,
      password: values.password
    });
  
    // Accounts.onCreateUser((options, user) => {
    //   user.name = user.name; 
    //   user.lastname = user.lastname; 
    //   user.organization = user.organization; 
    //   user.licence = user.licence;

    //   return user; 
    // }); 
  } 
}); 
