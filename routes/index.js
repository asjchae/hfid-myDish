var Entry = require('../models/entry_schema')
    , mongoose = require('mongoose');

/*
 * GET home page.
 */

// var data = {
//   "entries": [
//     {
//       "title": "Chicken Noms",
//       "picture":"/images/shawarma.jpeg",
//       "notes": "fake notes",
//       "recipe": "fake recipe",
//       "category": "cat1#cat2#cat3",
//       "datecreated": "11/4/2013",
//       "id":"1"
//     },
//     {
//       "title": "Chicken Noms2",
//       "picture":"/images/shawarma.jpeg",
//       "notes": "fake notes2",
//       "recipe": "fake recipe2",
//       "category": "cat1#cat2#cat32",
//       "datecreated": "11/4/20132",
//       "id":"2"
//     }
//   ]
// };

// MAIN PAGE: PASS IN ALL ENTRIES
exports.index = function(req, res){
  var allEntries = Entry.find({}).exec(function (err, data) {
    if (err) {
      res.send("Could not find all entries");
    } else if (data.length == 0) {
      res.render('index', {entries: []});
    } else {
      entry_compile(data, res, function (res, entrypack) {
        entrypack.reverse();
        res.render('index', {entries: entrypack});
      });
    };
  });
};

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


exports.catselects = function (req, res) {
  console.log("what");
  res.redirect('/');
};

exports.camera = function (req, res) {
  res.render('camera');
};


// DELETE ENTRY: PASS IN ID
exports.deleteEntry = function (req, res) {
  var id = req.params.id;

  if (id >= 0 && id < data.entries.length) {
    data.entries.splice(id, 1);
    res.json(true);
  } else {
    res.json(false);
  }
};

