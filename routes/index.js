var topics = require('../data_topics.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
  //res.json(topics);
  res.render('index', topics);
};
