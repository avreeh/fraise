var phrases = require("../data_favorites.json");
var topicName;

exports.view = function(req, res){
  res.render('favorites', phrases);
};

exports.addFav = function(req, res){
  topicName = req.params.topic;
  console.log("adding fav from " + topicName);
  var pair = [];
  pair.push(req.params.fr);
  pair.push(req.params.en);
  for(i = 0; i < phrases.favorites.length; i++) {
    if(phrases.favorites[i]['topic'] == topicName) // locate the user's database and add it in
    {
      phrases.favorites[i]['phrasePairs'].push(pair);
      console.log("added fav");
      break;
    }
  }
  return res.redirect('../../lesson/' + topicName);
};