import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
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
});
