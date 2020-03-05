var facebookSuccess = false;

$(document).ready(function() {
	$("#photo").hide();
	$("#loginButton").click(loginListener);
})

function checkLoginState() {
	FB.getLoginStatus(function(response) {
	  statusChangeCallback(response);
	});
}
  
function statusChangeCallback(response) {
	console.log('Facebook login status changed.');
	console.log(response);
	// The response object is returned with a status field that lets the
	// app know the current login status of the person.
	// Full docs on the response object can be found in the documentation
	// for FB.getLoginStatus().
	if (response.status === 'connected') {
	  // Logged into your app and Facebook.
		  console.log('Successfully logged in with Facebook');
		   FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
	}
	if (response.status === 'unknown') {
		// Logged into your app and Facebook.
		alert("Facebook login failed. Please refresh the page and try again.");
	}
}

function changeUser(response) {
	console.log('in changeUser function');
	facebookSuccess = true;
	$("p.facebookLogin, input").hide();
	$("#fbUsername").text("Welcome, " + response.name);
	$("#photo").attr("src", response.picture.data.url);
	$("#photo").show();
	$("#loginButton").text("Continue");
	$("#profileLink").attr("href", "profile/" + response.name);
}

function loginListener(e) {
	// console.log(document.getElementById('usernameBox').value);
	if(document.getElementById('usernameBox').value == "" && facebookSuccess == false) {
		e.preventDefault();
		alert("Username cannot be empty!");
	}
	else if(document.getElementById('passwordBox').value == "" && facebookSuccess == false) {
		e.preventDefault();
		alert("Password cannot be empty!");
	} else { // dynamically go to the input username page
		$("#profileLink").attr("href", "profile/" + document.getElementById('usernameBox').value);
	}
}