var users = require('../profiles.json');
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('profile');
};

exports.view = function(req, res){
  //res.json(topics);
  res.render('profile', users);
};
