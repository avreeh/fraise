var phrases = require('../data_phrases_help.json');
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('practice', phrases);
};
