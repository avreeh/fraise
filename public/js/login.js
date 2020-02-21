'use strict';
$(document).ready(function() {
})

$('.message a').click(function(){
	$('form').animate({height: "toggle", opacity: "toggle"}, "slow");
 });
 
 
FB.getLoginStatus(function(response) {
	 statusChangeCallback(response);
 });
 
 
function checkLoginState() {
   FB.getLoginStatus(function(response) {
	 statusChangeCallback(response);
   });
 }