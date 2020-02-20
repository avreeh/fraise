var phrases = require('../data_phrases_love.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('love', phrases);
};