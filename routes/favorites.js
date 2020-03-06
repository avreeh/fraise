var phrases = require("../data_favorites.json");
var requests = require('../data_phrases_help.json');
var lifestyle = require('../data_phrases_lifestyle.json');
var dining = require('../data_phrases_dining.json');
var family = require('../data_phrases_family.json');
var love = require('../data_phrases_love.json');
var school = require('../data_phrases_school.json');
var topicName;

exports.view = function(req, res){
  res.render('favorites', phrases);
};

exports.getFav = function(req, res){
  res.json(phrases);
}

exports.addFav = function(req, res){
  topicName = req.params.id;
  console.log("adding fav from " + topicName);
  var pair = []; // construct a french-english pair
  pair.push(req.body.fr);
  pair.push(req.body.en);
  for(i = 0; i < phrases.favorites.length; i++) {
    if(phrases.favorites[i]['topic'].toLowerCase() == topicName) // locate the topic in user's database and add it in
    {
      phrases.favorites[i]['phrasePairs'].push(pair);
      console.log(pair);
      switch (topicName) {
        case "requests":
          for(j = 0; j < requests.phrases.length; j++) {
            if (requests.phrases[j]['english'] == req.body.en) {
              requests.phrases[j]['liked'] = true;
              break;
            }
          }
          break;
        case "lifestyle":
          for(j = 0; j < lifestyle.phrases.length; j++) {
            if (lifestyle.phrases[j]['english'] == req.body.en) {
              lifestyle.phrases[j]['liked'] = true;
              break;
            }
          }
          break;
        case "dining":
          for(j = 0; j < dining.phrases.length; j++) {
            if (dining.phrases[j]['english'] == req.body.en) {
              dining.phrases[j]['liked'] = true;
              break;
            }
          }
          break;
        case "family":
          for(j = 0; j < family.phrases.length; j++) {
            if (family.phrases[j]['english'] == req.body.en) {
              family.phrases[j]['liked'] = true;
              break;
            }
          }
          break;
        case "love":
          for(j = 0; j < love.phrases.length; j++) {
            if (love.phrases[j]['english'] == req.body.en) {
              love.phrases[j]['liked'] = true;
              break;
            }
          }
          break;
        case "school":
          for(j = 0; j < school.phrases.length; j++) {
            if (school.phrases[j]['english'] == req.body.en) {
              school.phrases[j]['liked'] = true;
              break;
            }
          }
          break;
      }
      console.log("added fav");
      return;
    }
  }
};

exports.removeFav = function(req, res){
  topicName = req.params.id;
  console.log("removing fav from " + topicName);
  // var pair = []; // construct a french-english pair
  // pair.push(req.body.fr);
  // pair.push(req.body.en);
  for(i = 0; i < phrases.favorites.length; i++) {
    if(phrases.favorites[i]['topic'] == topicName) // locate the topic in user's database and add it in
    {
      for(j = 0; j < phrases.favorites[i]['phrasePairs'].length; j++) {
        if (phrases.favorites[i]['phrasePairs'][j][0] == req.body.fr) {
          phrases.favorites[i]['phrasePairs'].splice(j, 1);
          switch (topicName) {
            case "requests":
              for(j = 0; j < requests.phrases.length; j++) {
                if (requests.phrases[j]['english'] == req.body.en) {
                  requests.phrases[j]['liked'] = false;
                  break;
                }
              }
              break;
            case "lifestyle":
              for(j = 0; j < lifestyle.phrases.length; j++) {
                if (lifestyle.phrases[j]['english'] == req.body.en) {
                  lifestyle.phrases[j]['liked'] = false;
                  break;
                }
              }
              break;
            case "dining":
              for(j = 0; j < dining.phrases.length; j++) {
                if (dining.phrases[j]['english'] == req.body.en) {
                  dining.phrases[j]['liked'] = false;
                  break;
                }
              }
              break;
            case "family":
              for(j = 0; j < family.phrases.length; j++) {
                if (family.phrases[j]['english'] == req.body.en) {
                  family.phrases[j]['liked'] = false;
                  break;
                }
              }
              break;
            case "love":
              for(j = 0; j < love.phrases.length; j++) {
                if (love.phrases[j]['english'] == req.body.en) {
                  love.phrases[j]['liked'] = false;
                  break;
                }
              }
              break;
            case "school":
              for(j = 0; j < school.phrases.length; j++) {
                if (school.phrases[j]['english'] == req.body.en) {
                  school.phrases[j]['liked'] = false;
                  break;
                }
              }
              break;
          }
          console.log("deleted fav");
          return;
        }
      }
    }
  }
};

// exports.addFav = function(req, res){
//   topicName = req.params.topic;
//   console.log("adding fav from " + topicName);
//   var pair = [];
//   pair.push(req.params.fr);
//   pair.push(req.params.en);
//   for(i = 0; i < phrases.favorites.length; i++) {
//     if(phrases.favorites[i]['topic'] == topicName) // locate the user's database and add it in
//     {
//       phrases.favorites[i]['phrasePairs'].push(pair);
//       console.log("added fav");
//       break;
//     }
//   }
//   return res.redirect('../../lesson/' + topicName);
// };