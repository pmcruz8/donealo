import { Mongo } from 'meteor/mongo'; 

export const Organizations = new Mongo.Collection('organizations'); 

Meteor.methods({

  'createOrganization' : function(org) {

    var userID = Meteor.userId(); 
    console.log("creating organization: " + userID); 

    Organizations.insert({
      name: org,
      user: userID
    }); 
  },

  'saveProfileInfo' : function(values) {
    
    var userID = Meteor.userId(); 
    console.log(userID); 

    Organizations.update(
      { 
        user: userID
      }, 
      
      { $set: {
          about : values.about, 
          faq: values.faq
      }
    });
  },

  'saveOrgInfo' : function(values) {
    
    var userID = Meteor.userId(); 
    console.log(userID); 

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
        avatar: values.avatar, 
        websiteURL: values.websiteURL, 
        facebookURL: values.facebookURL
      }
    });
  },

  'savePersonalInfo' : function(values) {
    
    var userID = Meteor.userId(); 
    console.log(userID); 

    Organizations.update(
      { 
        user: userID
      }, 
      {$set: {
        username: values.username, 
        lastname: values.lastname, 
        email: values.email, 
        password: values.password
      }
    });
  },

  'saveAvatar' : function(avatar) {
    
    var userID = Meteor.userId(); 
    console.log(userID); 

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
