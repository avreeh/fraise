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
	$("#addFriendForm").hide();
	$("#search-form").submit(searchListener);
	$("#indexHelp").click(indexHelpListener);
	$('#profileHelp').click(profileHelpListener);
	$('#favoritesHelp').click(favoritesHelpListener);
	$('#addFriendButton').click(addFriendFormOpen);
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

function indexHelpListener(e)
{
	e.preventDefault();
	alert("Welcome to fraise, the French learning app that caters to you! Begin by selecting one of the recommended topics below.");
}

function profileHelpListener(e)
{
	e.preventDefault();
	alert("On this page, you can view your achievements, status, and friends. You can also add new friends.");
}

function favoritesHelpListener(e)
{
	e.preventDefault();
	alert("On this page, you can view the phrases that you have favorited.");
}

function addFriendFormOpen(e)
{
	e.preventDefault();
	$("#addFriendForm").show();
	$('#addFriendButton').hide();
}