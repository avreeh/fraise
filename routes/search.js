
/*
 * go to search page
 */

exports.search = function(request, response) {   
	// Your code goes here
	// data.friends.push({"name": request.query.name, "description": request.query.description, "imageURL": "http://lorempixel.com/400/400/people"});
	console.log(request.query);
	response.render("search");
}