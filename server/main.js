import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Organizations } from '../collections/organizations';

Meteor.startup(() => {

  Organizations.insert({
    name: "lo que sea",
    category: "salud"
  });
  Organizations.insert({
    name: "lo que sea",
    category: "salud"
  });
  Organizations.insert({
    name: "lo que sea",
    category: "familia"
  });
  Organizations.insert({
    name: "lo que sea",
    category: "animales"
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