var phrases = require('../data_phrases_school.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('school', phrases);
};