import { Mongo } from 'meteor/mongo'; 

export const Organizations = new Mongo.Collection('organizations'); 

Meteor.methods({
  'createOrganization': function(values) {

    Organizations.insert({ 
      name: values.name, 
      category: values.category, 
      about: values.about, 
      photoURL: values.photoURL
    });     
  }
});
