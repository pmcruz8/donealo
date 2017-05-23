import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Accounts } from 'meteor/accounts-base'; 
import { Organizations } from '../collections/organizations';
import { Link } from 'react-router-dom';

Meteor.startup(() => {

  // Organizations Publication
  Meteor.publish('organizations', function() {
    return Organizations.find({});
  });

  // Single Organization Publication
  Meteor.publish('organization', function(organizationID) {
    return Organizations.find({_id: organizationID});
  });

});

Meteor.methods({

  'createNewUser' : function(values) {
    
    let user = {
      email: values.email, 
      password: values.password
    };

    Accounts.createUser(user,
      function(error) {
        if (error) {
          console.log("there was an error: " + error.reason);
        } else { 
          <Link to="/"></Link>
        };
      }
    );
  }, 

  'sendVerificationLink' : function() {
    let userId = Meteor.userId();
    if ( userId ) {
      return Accounts.sendVerificationEmail( userId );
    }
  }
}); 

