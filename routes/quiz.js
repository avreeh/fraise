var requests = require('../data_phrases_help.json');
var lifestyle = require('../data_phrases_lifestyle.json');
var dining = require('../data_phrases_dining.json');
var family = require('../data_phrases_family.json');
var love = require('../data_phrases_love.json');
var school = require('../data_phrases_school.json');

exports.view = function(req, res){
  var projectID = req.params.id;
	if (projectID == "requests") {
		res.render('quiz', requests); // http://localhost:3000/quiz/requests
	} 
	else if (projectID == "lifestyle") {
		res.render('quiz', lifestyle);
	}
	else if (projectID == "dining") {
		res.render('quiz', dining);
	}
	else if (projectID == "family") {
		res.render('quiz', family);
	}
	else if (projectID == "love") {
		res.render('quiz', love);
	}
	else if (projectID == "school") {
		res.render('quiz', school);
	}
	else {
    res.render('quiz', requests);
	}
};
