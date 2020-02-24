var users = require('../data_friends.json');
var currentUser;
var firstTime = true;

exports.view = function(req, res){
  var friendName = req.params.id; // name from URL
  for (i = 0; i < users.profiles.length; i++) // look for a name match in JSON
  {
    if(users.profiles[i]['myUsername'] == friendName)
    {
      users.profiles[i]['viewAlt'] = false; // A/B testing code
      if(firstTime) // set the permanent state for currentUser
      {
        currentUser = friendName;
        firstTime = false;
      }
      console.log(currentUser);
      res.render('profile', users.profiles[i]); // if matched, render with existing info
    }
  }
  if(firstTime) // set the permanent state for currentUser
  {
    currentUser = friendName;
    firstTime = false;
  }
  console.log(currentUser);
  res.render('profile', { // otherwise render a new blank profile
    "myUsername": friendName,
    "myBio": "Hello world! I'm new here!",
    "myFriends": [],
    "newProfile": true,
    "viewAlt": false  // A/B testing code
  });
};

exports.viewAlt = function(req, res){
  var friendName = req.params.id; // name from URL
  for (i = 0; i < users.profiles.length; i++) // look for a name match in JSON
  {
    if(users.profiles[i]['myUsername'] == friendName)
    {
      users.profiles[i]['viewAlt'] = true;  // A/B testing code
      if(firstTime) // set the permanent state for currentUser
      {
        currentUser = friendName;
        users.profiles[i]['currentUser'] = true; // this allows Add Friend feature
        firstTime = false;
      }
      if (currentUser == friendName) // requested profile is the actual user's
      {
        users.profiles[i]['currentUser'] = true; // this allows Add Friend feature
      }
      else 
      {
        users.profiles[i]['currentUser'] = false; // this disables Add Friend feature
      }
      res.render('profile', users.profiles[i]); // if matched, render with existing info
    }
  }

  newUser = { // create new user profile
    "myUsername": friendName,
    "myBio": "Hello world! I'm new here!",
    "myFriends": [],
    "newProfile": true,
    "viewAlt": true,  // A/B testing code
    "currentUser": true
  }
  if(firstTime) // the user just came from the Login page and need their profile page
  {
    currentUser = friendName;
    firstTime = false;
    users.profiles.push(newUser);
    res.render('profile', newUser);
  }
  else 
  {
    newUser['currentUser'] = false; // this disables Add Friend feature
    res.render('profile', newUser);
  }
};

// method for getting the actual user's profile
exports.viewDefault = function(req, res){
  res.redirect("profile/" + currentUser);
  // users.profiles[0]['viewAlt'] = true;
  // res.render('profile', users.profiles[0]); // render default profile (strawberrypower)
};

// method for adding a new friend when they click the red button
// CAUTION: if the currentUser's profile does not exist, the redirect will get stuck!!
exports.addFriend = function(req, res) {   
  var newFriendName = req.query.name; // user's friend name input
  for (i = 0; i < users.profiles.length; i++)
  {
    if(users.profiles[i]['myUsername'] == currentUser) // locate the user's database and add it in
    {
      users.profiles[i]['myFriends'].push(newFriendName); // add new friend's name
      res.redirect('/profile/' + currentUser);
    }
  }
}

// function openForm() {
//   document.getElementById("myForm").style.display = "block";
// }

// function closeForm() {
//   document.getElementById("myForm").style.display = "none";
// }

// $(function () {
//   $('.pop-button').popover({
//     trigger: 'focus'
//   });
// });

// $('.popover-header').click(function() {
// 	$('.pop-button').popover('hide');
// });
