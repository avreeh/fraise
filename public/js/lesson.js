'use strict';
var topicName; // current topic name for lesson overview/practice/quiz
var englishTranslations = []; // array of English translations read from the topic page (AJAX)
var frenchTranslations = []; // array of French translations read from the topic page (AJAX)
var lang = []; // the current displayed language (en/fr) for each phrase index

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	topicName = getTopic();
	console.log(topicName);
	initializePage();
	$.get("/topic/" + topicName, initializePhrases);
	// var text = localStorage.getItem('../data_phrases_help.json');
	// console.log(text);
	// phrases = JSON.parse(text);
	// console.log(phrases);
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
	$("#next-button").hide(); // for quiz screen only
	$("#topicName").text(topicName.toUpperCase());
	$("#practiceButton").attr("href", "../practice/" + topicName); // dynamic links on lesson page
	$("#quizButton").attr("href", "../quiz/" + topicName); // dynamic links on lesson page
	$("#lessonLink").attr("href", "../lesson/" + topicName); // dynamic links on lesson page
	$("#search-form").submit(searchListener);
	// $(".name a").click(listenerFunction);
	$(".frenchtoggle").click(pencilListener);
	$(".glyphicon-heart").click(heartListener);
	$("#lessonHelp").click(lessonHelpListener);
	$("#practiceHelp").click(practiceHelpListener);
	$(".phrase-button").click(phraseFlip);
	$(".choice-button").click(choiceListener);
	$("#0, #indicator0").addClass("active"); // for practice screen only
	$('.carousel').carousel({
		interval: false // no auto "playing" of the carousel
	})
}

function getTopic() {
	var url = window.location.href;
	if(url.search("requests") != -1)
	{
		return "requests";
	}
	else if (url.search("lifestyle") != -1)
	{
		return "lifestyle";
	}
	else if (url.search("dining") != -1)
	{
		return "dining";
	}
	else if (url.search("family") != -1)
	{
		return "family";
	}
	else if (url.search("love") != -1)
	{
		return "love";
	}
	else if (url.search("school") != -1)
	{
		return "school";
	} 
	else {
		//
	}
}

function initializePhrases(result) {
	// console.log(result);
	var length = result['phrases'].length;
	// console.log(length);
	for(var i = 0; i < length; i++)
	{
		englishTranslations.push(result['phrases'][i]['english']);
		frenchTranslations.push(result['phrases'][i]['french']);
		lang.push("fr");
	}
	// console.log(englishTranslations);
	// console.log(frenchTranslations);
	// console.log(lang);
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
}

function heartListener(e)
{
	e.preventDefault();
	$(this).css("color", "red");
}

function lessonHelpListener(e)
{
	e.preventDefault();
	alert("Review the phrases on this page. To practice memorization, tap the ... icon to toggle the French phrase."
	+ " To save a phrase for later, tap the Heart icon.");
}

function practiceHelpListener(e)
{
	e.preventDefault();
	alert("Scroll through each phrase and click to toggle between English and French. " +
	"Click on the forward button at the bottom when you're ready for the quiz");
}

function phraseFlip(e)
{
	e.preventDefault();
	var id = $(this).attr('id').substring(4); // sequence number
	if (lang[id] == 'fr') // currently displaying French, flip it to English
	{
		var englishText = "<p>" + englishTranslations[id] + "</p>";
		$(this).html(englishText);
		lang[id] = 'en'; // set the current language to English
	}
	else if (lang[id] == 'en') // currently displaying French, flip it to English
	{
		var frenchText = "<p>" + frenchTranslations[id] + "</p>";
		$(this).html(frenchText);
		lang[id] = 'fr'; // set the current language to English
	}
}

function choiceListener(e)
{
	e.preventDefault();
	var buttonText = $(this).text();
	console.log("Correct answer is: " + frenchTranslations[1]);
	console.log("User picked: " + buttonText);
	if (buttonText.search(frenchTranslations[1]) != -1) {
		$(this).text("Correct!");
		$(".progress-bar").attr('aria-valuenow', "0");
		$(".progress-bar").attr('style', "width: 100%;");
		$(".progress-bar").text('100%');
		$("#next-button").show();
	} else {
		$(this).text("Try again!");
	}
	
}