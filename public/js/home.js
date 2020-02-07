'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})


/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
	//$("#search-result").hide();
	$("#search-form").submit(searchListener);
	// $(".name a").click(listenerFunction);
}

function searchListener(e)
{
	e.preventDefault();
	var userQuery = $(this).text();
	console.log(userQuery);
	$("#search-result").text("No relevant lessons found. The feature is pending development!");
	// var name = $(this).text();
	// var newName = anagrammedName(name);
	// console.log(newName);
	// $(this).text(newName);
}
