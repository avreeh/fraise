var phrases = require("../data_favorites.json")

exports.view = function(req, res){
  res.render('favorites', phrases);
};