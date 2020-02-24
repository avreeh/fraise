var users = require('../data_friends.json');

exports.view = function(req, res){
  var friendName = req.params.id; // name from URL
  for (i = 0; i < users.profiles.length; i++) // look for a name match in JSON
  {
    if(users.profiles[i]['myUsername'] == friendName)
    {
      res.render('friendprofile', users.profiles[i]); // if matched, render with existing info
    }
  }
  res.render('friendprofile', {
    "myUsername": friendName,
    "myBio": "Hello world! I'm new here!",
    "myFriends": [],
    "newProfile": true
  });
};