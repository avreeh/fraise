var topics = require('../data_topics.json');

exports.projectInfo = function(request, response) {
	var topicID = request.params.id;
	if (topicID == "random") {
		topicID = Math.floor(Math.random() * topics.length) + 1;
	} else {
		topicID = parseInt(topicID);
	}

  	var project = projects[projectID-1]; // of by one, our first project has index 0
  	response.json(project);
}