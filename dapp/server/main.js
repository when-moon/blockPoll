import { Meteor } from 'meteor/meteor';
SavedRolls= new Mongo.Collection('savedRolls');
SavedCandidates= new Mongo.Collection('savedCandidates');

Meteor.startup(() => {
  // code to run on server at startup
});
