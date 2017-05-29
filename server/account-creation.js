Accounts.onCreateUser(function(options, user) {
   user.profile = options.profile || {};
   
   // Assigns first and last names to the newly created user object
   user.profile.firstName = options.firstname;
   user.profile.lastName = options.lastname;
   user.profile.organization = options.organization; 
   user.profile.licence = options.licence; 
   
   console.log(options); 

   Meteor.call('createOrganization', options.organization); 

   // Returns the user object
   return user;
});