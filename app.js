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
var usability = require('./routes/usability');

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
app.post('/', recipes.entry_post);

app.get('/addEntry', recipes.addEntry);
app.get('/deleteEntry/:id', index.deleteEntry);

app.get('/db_entries', recipes.db_entries);
app.get('/db_delete', recipes.db_delete);

app.post('/', recipes.entry_post);
app.post('/selectedcategories', index.catselects);

app.get('/alpha', usability.alpha);
app.get('/beta', usability.beta);
app.get('/gamma', usability.gamma);

app.post('/alpha', usability.addAlpha_post);
app.post('/beta', usability.addBeta_post);
app.post('/gamma', usability.addGamma_post);

app.get('/addEntry_alpha', usability.addAlpha);
app.get('/addEntry_beta', usability.addBeta);
app.get('/addEntry_gamma', usability.addGamma);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
