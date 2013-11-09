
var Entry = require('../models/entry_schema')
    , mongoose = require('mongoose');

exports.db_entries = function (req, res) {
  var allEntries = Entry.find({}).exec(function (err, data) {
    if (err) {
      res.send("Could not find all entries");
    } else if (data.length == 0) {
      res.send("No entries");
    } else {
      entry_compile(data, res, function (res, entrypack) {
        res.send(entrypack);
      });
    };
  });
}

function entry_compile(data, res, callback) {
  var all_entries = [];
  for (var i=0; i<data.length; i++) {
    var temp_entry = Entry.findOne({title: data[i].title}).exec(function (err, response) {
      all_entries.push(response);
      if (all_entries.length == data.length) {
        callback(res, all_entries);
      }
    });
  }
};

exports.db_delete = function (req, res) {
  var deleteAll = Entry.find({}).remove();
  res.redirect('/db_entries');
};

exports.addEntry = function (req, res) {
	res.render('addEntry');
};

exports.addEntry_post = function(req, res) {
  console.log(req.body);

  var date = new Date();
  var month = date.getMonth() + 1;
  if (month.toString().length == 1) {
    month = "0".concat(month);  
  }
  var number = date.getDate();
  if (number.toString().length == 1) {
    number = "0".concat(number);
  }
    var year = date.getFullYear();

    var d = year + "/" + month + "/" + number;

    var newentry = new Entry({title: req.body.title, picture: req.body.picture, recipe: req.body.recipe,
                              category: req.body.category, notes: req.body.notes, date: d});
    newentry.save(function (err) {
      if (err) {
        console.log("Problem saving entry.");
        res.redirect('/addEntry');
      } else {
        res.redirect('/');
      }
    });
};

exports.editEntry = function (req, res) {
  var entry_title = req.params.id;
  Entry.findOne({title: entry_title}).exec(function (err, response) {
    if (err) {
      console.log('Could not locate entry.')
    } else {
      res.render('editEntry', {entry: response});
    }
  });
	// res.render('editEntry',{entry: data.entries[id]});
};



// DELETE

exports.deleteEntry = function (req, res) {
  var id = req.params.id;

  if (id >= 0 && id < data.entries.length) {
    data.entries.splice(id, 1);
    res.json(true);
  } else {
    res.json(false);
  }
};