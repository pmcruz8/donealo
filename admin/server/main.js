import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo'; 

import { Campaigns }  from '../collections/campaigns'; 
import { Organizations } from '../collections/organizations'; 

Meteor.startup(() => {
  // Single Campaign Publication
  Meteor.publish('campaign', function(campaignID) {
    return Campaigns.find({_id: campaignID}); 
  });  

  // Active Campaigns Publication
  Meteor.publish('campaigns.active', function() {
    return Campaigns.find({type: 'active'}); 
  });

  // Active Campaigns Publication
  Meteor.publish('campaigns.active', function(userID) {
    return Campaigns.find({type: 'active', userID: userID}); 
  });

  // Private Campaigns Publication 
  Meteor.publish('campaigns.private', function(userID) {
    return Campaigns.find({type: 'private', userID: userID}); 
  });

  // Past Campaigns Publication
  Meteor.publish('campaigns.past', function(userID) {
    return Campaigns.find({type: 'past', userID: userID}); 
  });

  // Organizations Publication
  Meteor.publish('organizations', function() {
    return Organizations.find({}); 
  });

  // Single Organization Publication
  Meteor.publish('organization', function(organizationID) {
    return Organizations.find({_id: organizationID}); 
  });
});
