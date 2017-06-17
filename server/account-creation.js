Accounts.onCreateUser(function(options, user) {
   user.profile = options.profile || {};
   
   console.log("USER ID on created user: " + user._id); 

   // Assigns first and last names to the newly created user object
   user.profile.firstName = options.firstname;
   user.profile.lastName = options.lastname;
   user.profile.organization = options.organization; 
   user.profile.licence = options.licence; 

   // Returns the user object
   return user;
});