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
        users.profiles[i]['currentUser'] = true; // this allows Add Friend feature
        firstTime = false;
      }
      else if (currentUser == friendName) // requested profile is the actual user's
      {
        users.profiles[i]['currentUser'] = true; // this allows Add Friend feature
      }
      else 
      {
        users.profiles[i]['currentUser'] = false; // this disables Add Friend feature
      }
      return res.render('profile', users.profiles[i]); // if matched, render with existing info
    }
  }
  
  newUser = { // create new user profile
    "myUsername": friendName,
		"quizzesCompleted": 0,
		"lessonsCompleted": 0,
    "myBio": "Hello world! I'm new here!",
    "myFriends": [],
    "newProfile": true,
    "viewAlt": false,  // A/B testing code
    "currentUser": true
  }
  if(firstTime) // the user just came from the Login page and need their profile page
  {
    currentUser = friendName;
    firstTime = false;
    users.profiles.push(newUser);
    return res.render('profile', newUser);
  }
  else 
  {
    newUser['currentUser'] = false; // this disables Add Friend feature
    return res.render('profile', newUser);
  }
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
      else if (currentUser == friendName) // requested profile is the actual user's
      {
        users.profiles[i]['currentUser'] = true; // this allows Add Friend feature
      }
      else 
      {
        users.profiles[i]['currentUser'] = false; // this disables Add Friend feature
      }
      return res.render('profile', users.profiles[i]); // if matched, render with existing info
    }
  }

  newUser = { // not found, create new user profile
    "myUsername": friendName,
    "quizzesCompleted": 0,
		"lessonsCompleted": 0,
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
    return res.render('profile', newUser);
  }
  else 
  {
    newUser['currentUser'] = false; // this disables Add Friend feature
    return res.render('profile', newUser);
  }
};

// method for getting the actual user's profile
exports.viewDefault = function(req, res){
  return res.redirect("profile/" + currentUser);
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
      return res.redirect('/profile/' + currentUser);
    }
  }
}

exports.logout = function(req, res) { 
  firstTime = true;
  return res.redirect("login");
}

exports.getCurrentUser = function(req, res) {
  res.json({currentUser});
}

exports.getUserStats = function(req, res) {
  var username = req.params.id;
  if(username == null || username == "undefined") {
    username = currentUser;
  }
  var found = false;
  for (i = 0; i < users.profiles.length; i++)
  {
    if(users.profiles[i]['myUsername'] == username) // locate the user's database and add it in
    {
      found = true;
      return res.json({
        "quizzes": users.profiles[i]['quizzesCompleted'], 
        "lessons": users.profiles[i]['lessonsCompleted']
      });
    }
  }
  if (found == false)
  {
    return res.json({ // default return (prevents breaking)
      "quizzes": 0, 
      "lessons": 0
    });
  }
}

exports.setUserStats = function(req, res) {
  var username = req.params.id;
  if(username == null || username == "undefined") {
    username = currentUser;
  }
  var found = false;
  if(req.body.text == "quiz")
  {
    for (i = 0; i < users.profiles.length; i++)
    {
      if(users.profiles[i]['myUsername'] == username) // locate the user's database and add it in
      {
        found = true;
        users.profiles[i]['quizzesCompleted'] += 1;
        console.log("Quiz stat increment successful.");
        return;
      }
    }
  }
  
  if (found == false)
  {
    console.log("user not found; quiz stat increment unsuccessful.");
    return;
  }
}

