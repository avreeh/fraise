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
	$("#next-button").hide();
	$("#search-form").submit(searchListener);
	// $(".name a").click(listenerFunction);
	$(".frenchtoggle").click(pencilListener);
	$(".glyphicon-heart").click(heartListener);
	$(".help").click(helpListener);
	$(".phrase-button").click(phraseFlip);
	$(".choice-button").click(choiceListener);
	$("#0, #indicator0").addClass("active");
	$('.carousel').carousel({
		wrap: false,
		interval: false
	})
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
	e.preventDefault();
	console.log("Entered toggle function.");
	$(".french").toggle(200);
	//$("p:nth-child(2)").toggle();
}

function heartListener(e)
{
	e.preventDefault();
	$(this).css("color", "red");
}

function helpListener(e)
{
	e.preventDefault();
	alert("Please review the phrases on this page. To practice memorization, tap the Pencil icon to toggle the French phrase."
	+ " To save a phrase for later, tap the Heart icon.");
}

function phraseFlip(e)
{
	e.preventDefault();
	$(this).html("<p>I need help getting home.</p>");
}

function choiceListener(e)
{
	e.preventDefault();
	var buttonText = $(this).text();
	console.log(buttonText);
	if (buttonText == "I need help getting home.") {
		$(this).text("Correct!");
		$(".progress-bar").attr('aria-valuenow', "0");
		$(".progress-bar").attr('style', "width: 100%;");
		$(".progress-bar").text('100%');
		$("#next-button").show();
	} else {
		$(this).text("Try again!");
	}
	
}