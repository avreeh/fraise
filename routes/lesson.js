var requests = require('../data_phrases_help.json');
var lifestyle = require('../data_phrases_lifestyle.json');
var dining = require('../data_phrases_dining.json');
var family = require('../data_phrases_family.json');
var love = require('../data_phrases_love.json');
var school = require('../data_phrases_school.json');

exports.view = function(req, res){
  var projectID = req.params.id;
	if (projectID == "requests") {
		res.render('lesson', requests); // http://localhost:3000/lesson/help
	} 
	else if (projectID == "lifestyle") {
		res.render('lesson', lifestyle);
	}
	else if (projectID == "dining") {
		res.render('lesson', dining);
	}
	else if (projectID == "family") {
		res.render('lesson', family);
	}
	else if (projectID == "love") {
		res.render('lesson', love);
	}
	else if (projectID == "school") {
		res.render('lesson', school);
	}
	else {
    res.render('lesson', requests);
	}
};