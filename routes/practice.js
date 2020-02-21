var requests = require('../data_phrases_help.json');
var lifestyle = require('../data_phrases_lifestyle.json');
var dining = require('../data_phrases_dining.json');
var family = require('../data_phrases_family.json');
var love = require('../data_phrases_love.json');
var school = require('../data_phrases_school.json');

exports.view = function(req, res){
  var projectID = req.params.id;
	if (projectID == "requests") {
		res.render('practice', requests); // http://localhost:3000/practice/requests
	} 
	else if (projectID == "lifestyle") {
		res.render('practice', lifestyle);
	}
	else if (projectID == "dining") {
		res.render('practice', dining);
	}
	else if (projectID == "family") {
		res.render('practice', family);
	}
	else if (projectID == "love") {
		res.render('practice', love);
	}
	else if (projectID == "school") {
		res.render('practice', school);
	}
	else {
    res.render('practice', requests);
	}
};
