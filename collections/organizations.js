import { Mongo } from 'meteor/mongo'; 

export const Organizations = new Mongo.Collection('organizations'); 

Meteor.methods({

  'createOrganization' : function(org) {
    Organizations.insert({
      name: org,
      user: Meteor.userId()
    }); 
  },

  'saveProfileInfo' : function(values) {
    Organizations.update(
      { 
        user: Meteor.userId() 
      }, 
      
      { $set: {
          about : values.about, 
          faq: values.faq
      }
    });
  },

  'saveOrgInfo' : function(values) {

    console.log(Meteor.userId()); 
    console.log(values); 

    Organizations.update(
      { 
        user: Meteor.userId() 
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
    Organizations.update(
      { 
        user: Meteor.userId() 
      }, 
      {$set: {
        username: values.username, 
        lastname: values.lastname, 
        email: values.email, 
        password: values.password
      }
    });
  }

});
