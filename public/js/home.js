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
	$(".help").click(helpListener);
	// $(".name a").click(listenerFunction);
}

function searchListener(e)
{
	e.preventDefault();
	var userQuery = $(this).text();
	console.log(userQuery);
	$("#search-result").text("No relevant results found. This feature is pending development! Below are some suggestions.");
	// var name = $(this).text();
	// var newName = anagrammedName(name);
	// console.log(newName);
	// $(this).text(newName);
}

function helpListener(e)
{
	e.preventDefault();
	alert("Welcome to fraise, the French learning app that caters to you! Begin by typing some keywords in the search box, "
	+ "or select one of the recommended topics below. At any time, you may check your progress using links at the top of the page.");
}
