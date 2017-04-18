import { Mongo } from 'meteor/mongo'; 

export const Campaigns = new Mongo.Collection('campaigns'); 

Meteor.methods({
  'createCampaign': function(values) {

    Campaigns.insert({
      goal: values.goal, 
      title: values.title, 
      category: values.category, 
      datetime: values.datetime,
      about: values.about, 
      photoURL: values.photoURL
    });     
  }
});

Campaigns.allow({
  insert() {
    // When we will ALLOW inserts on the client.
    return Meteor.user() ? true : false; 
  },
  update() {
    // When we will ALLOW updates on the client.
    return Meteor.user() ? true : false; 
  }
});

Campaigns.deny({
  insert() {
    // When we will DENY inserts on the client.
    return !Meteor.user() ? true : false; 
  },
  update() {
    // When we will DENY updates on the client.
    return !Meteor.user() ? true : false; 
  }
});

