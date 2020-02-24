
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var achievements = require('./routes/achievements');
var favorites = require('./routes/favorites');
var profile = require('./routes/profile');
var lesson = require('./routes/lesson');
var practice = require('./routes/practice');
var quiz = require('./routes/quiz');
var levelup = require('./routes/levelup');
var topic = require('./routes/topic');
var login = require('./routes/login');
// var friendprofile = require('./routes/friendprofile');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', login.view);
app.get('/index', index.view);
app.get('/achievements', achievements.view);
app.get('/favorites', favorites.view);
app.get('/profile/:id/page_A', profile.view); // for A/B testing only
app.get('/profile/:id/page_B', profile.viewAlt);  // for A/B testing only
// note: may need to delete the one line below for Google Analytics auto-redirect
app.get('/profile/:id', profile.viewAlt); // for non-specified version, default to B
app.get('/profile', profile.viewDefault); // for non-specified profile name, use default
app.get('/add', profile.addFriend);
app.get('/lesson/:id', lesson.view);
app.get('/practice/:id', practice.view);
app.get('/quiz/:id', quiz.view);
app.get('/levelup', levelup.view);
app.get('/topic/:id', topic.topicInfo);
app.get('/login', login.view);
app.get('/logout', profile.logout);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
