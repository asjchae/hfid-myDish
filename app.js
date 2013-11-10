
/**
 * Module dependencies.
 */

// Note for Ari if mongodb fails: sudo mongod --dbpath /var/lib/mongodb --smallfiles

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var index = require('./routes/index');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var recipes = require('./routes/recipes');

var app = express();
mongoose.connect(process.env.MONGOLAB_URI || 'localhost/myDish');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

app.get('/camera', index.camera);

app.get('/viewEntry/:id', recipes.viewEntry);
app.post('/viewEntry/:id', recipes.editEntrypost);

app.get('/addEntry', recipes.addEntry);
app.get('/deleteEntry/:id', index.deleteEntry);

app.get('/db_entries', recipes.db_entries);
app.get('/db_delete', recipes.db_delete);

app.post('/', recipes.addEntry_post);
app.post('/selectedcategories', index.catselects);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
