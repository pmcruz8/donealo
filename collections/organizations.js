import { Mongo } from 'meteor/mongo';

export const Organizations = new Mongo.Collection('organizations');

Meteor.methods({

  'createOrganization' : function(org) {

    var userID = Meteor.userId(); 

    Organizations.insert({
      name: org,
      user: userID
    }); 
  },

  'saveProfileInfo' : function(values) {
    
    var userID = Meteor.userId(); 

    Organizations.update(
      { 
        user: userID
      }, 
      
      { $set: {
          about : values.about,
          A1: values.A1,
          A2: values.A2,
          A3: values.A3 
      }
    });
  },

  'saveOrgInfo' : function(values) {
    
    var userID = Meteor.userId(); 

    Organizations.update(
      { 
        user: userID
      }, 

      {$set: {
        name: values.organization,
        phone: values.phone,
        address: values.address,
        postal: values.postal,
        paypal: values.paypal,
        category: values.category,
        websiteURL: values.websiteURL,
        facebookURL: values.facebookURL
      }
    });
  },

  'savePersonalInfo' : function(values) {
    
    var userID = Meteor.userId(); 

    Organizations.update(
      { 
        user: userID
      }, 
      {$set: {
        username: values.username,
        lastname: values.lastname,
      }
    });
  },

  'saveAvatar' : function(avatar) {
    
    var userID = Meteor.userId(); 

    Organizations.update(
      { 
        user: userID
      }, 
      {$set: { 
        avatar: avatar 
      }
    });  
  }
});
