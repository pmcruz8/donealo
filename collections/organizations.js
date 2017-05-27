import { Mongo } from 'meteor/mongo'; 

export const Organizations = new Mongo.Collection('organizations'); 

Meteor.methods({
  'saveOrgValues': function(values) {

    console.log(values); 

    Organizations.update({_id : "9NbThiy8kHk3GqcZq"}, {$push:
      { 
        "name": values.organization,
        "phone": values.phone, 
        "address": values.address, 
        "postal": values.postal, 
        "paypal": values.paypal, 
        "category": values.category, 
        "avatar": values.avatar, 
        "websiteURL": values.websiteURL, 
        "facebookURL": values.facebookURL 
      }
    });     
  }, 

  'savePersonalValues': function(values) {

    Meteor.users.update(Meteor.userId(), {$push: 
      { "username": values.username,
        "lastname": values.lastname, 
        "email": values.email, 
        "password": values.password 
      }
    });
  }, 

  'saveProfileValues': function(values) {

    Organizations.insert({ 
      about: values.about,
      faq: values.faq
    });     
  }
});
