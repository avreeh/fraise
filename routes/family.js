var phrases = require('../data_phrases_family.json');

/*
 * GET family lesson page.
 */

exports.view = function(req, res){
  res.render('family', phrases);
};