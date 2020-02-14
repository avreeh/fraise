var profiles = require('../profiles.json');
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('levelup', profiles);
};
