'use strict';
var thisUser;

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	var url = window.location.href;
	if(url.search("profile") != -1) { // do these only on the profile page
		thisUser = $("#thisusername").text();
		$.get("/getCurrentUser", function(res){
			//console.log(res);
			var currentUser = res['currentUser'];
			initializeProfileIcon(currentUser);
		});	
		$.get("/getUserStats/" + thisUser, function(res){
			console.log(res);
			var quizzes = res['quizzes'];
			var lessons = res['lessons'];
			var newText = "Lessons: " + lessons;
			$("#lessons-completed").text(newText);
			newText = "Quizzes: " + quizzes;
			$("#quizzes-completed").text(newText);
		});	
	}
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
	$('.viewFriend').click(viewFriendListener);
	// $('#logout-link').click(confirmLogout);
}

function initializeProfileIcon(currentUser2) {
	var url = window.location.href;
	if(url.search("profile") != -1) {
		var currentUser = new URLSearchParams(window.location.search).get('currentUser');
		if (currentUser == null) {
			currentUser = currentUser2;
		}
		// thisUser = $("#thisusername").text();
		console.log("Current user: " + currentUser + "; this user: " + thisUser);
		const queryStr = "?currentUser=" + currentUser;
		$("a.viewFriend").each(function() {
			//console.log("X");
			$(this).attr("href", $(this).attr("href") + queryStr);
		})
		if(thisUser == currentUser) { // viewing own profile
			$('#logout-link').click(confirmLogout);
		}
		else { // viewing someone elses profile; logout button becomes return to own profile button
			$('#logout-link').attr("href", currentUser + queryStr);
			$('#logout-img').attr("src", "../../images/profile.png");
		}
	}
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
	ga("send", "event", "like", "click");
}

function viewFriendListener(e)
{
	ga("send", "event", "viewProfile", "click");
}

function confirmLogout(e)
{
	if($(this).attr("href", "/logout"))
	{
		if (confirm("Do you really want to log out?")) {
			// yes condition
		} else {
			e.preventDefault(); // do not log out
		}
	}
}
