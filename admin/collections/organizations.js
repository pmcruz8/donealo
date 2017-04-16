import { Mongo } from 'meteor/mongo'; 

export const Organizations = new Mongo.Collection('organizations'); 

Organizations.allow({
  insert() {
    // When we will ALLOW inserts on the client.
    //return Meteor.user() ? true : false; 
  },
  update() {
    // When we will ALLOW updates on the client.
    //return Meteor.user() ? true : false; 
  }
});

Organizations.deny({
  insert() {
    // When we will DENY inserts on the client.
    //return !Meteor.user() ? true : false; 
  },
  update() {
    // When we will DENY updates on the client.
    //return !Meteor.user() ? true : false; 
  }
});
