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
	$(".glyphicon-pencil").click(pencilListener);
	$(".glyphicon-heart").click(heartListener);
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

function pencilListener(e)
{
	//e.preventDefault();
	console.log("Entered toggle function.");
	$(".french").toggle(200);
	//$("p:nth-child(2)").toggle();
}

function heartListener(e)
{
	e.preventDefault();
	$(this).css("color", "red");
}