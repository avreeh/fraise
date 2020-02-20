var phrases = require('../data_phrases_dining.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('lessondining', phrases);
};