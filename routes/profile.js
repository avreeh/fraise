var users = require('../data_friends.json');
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('profile', users);
};

// function openForm() {
//   document.getElementById("myForm").style.display = "block";
// }

// function closeForm() {
//   document.getElementById("myForm").style.display = "none";
// }

// $(function () {
//   $('.pop-button').popover({
//     trigger: 'focus'
//   });
// });

// $('.popover-header').click(function() {
// 	$('.pop-button').popover('hide');
// });
