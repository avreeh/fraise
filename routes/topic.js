var requests = require('../data_phrases_help.json');
var lifestyle = require('../data_phrases_lifestyle.json');
var dining = require('../data_phrases_dining.json');
var family = require('../data_phrases_family.json');
var love = require('../data_phrases_love.json');
var school = require('../data_phrases_school.json');

exports.topicInfo = function(request, response) {
	var projectID = request.params.id;
	if (projectID == "requests") {
		response.json(requests); // http://localhost:3000/topic/requests
	} 
	else if (projectID == "lifestyle") {
		response.json(lifestyle);
	}
	else if (projectID == "dining") {
		response.json(dining);
	}
	else if (projectID == "family") {
		response.json(family);
	}
	else if (projectID == "love") {
		response.json(love);
	}
	else if (projectID == "school") {
		response.json(school);
	}
	else {
		//
	}
}
