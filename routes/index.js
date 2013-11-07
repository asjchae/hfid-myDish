
/*
 * GET home page.
 */

var data = {
  "entries": [
    {
      "title": "Chicken Noms",
      "picture":"/images/shawarma.jpeg",
      "notes": "fake notes",
      "recipe": "fake recipe",
      "category": "cat1#cat2#cat3",
      "datecreated": "11/4/2013",
      "id":"1"
    },
    {
      "title": "Chicken Noms2",
      "picture":"/images/shawarma.jpeg",
      "notes": "fake notes2",
      "recipe": "fake recipe2",
      "category": "cat1#cat2#cat32",
      "datecreated": "11/4/20132",
      "id":"2"
    }
  ]
};

// MAIN PAGE: PASS IN ALL ENTRIES
exports.index = function(req, res){
  res.render('index', {entries: data.entries});
};


//ADD ENTRY - SAVE ENTRY
exports.addEntry = function (req, res) {
  res.render('addEntry');
};

//EDIT ENTRY: PASS IN SINGLE ENTRY
exports.editEntry = function (req, res) {
  var id = req.params.id;
  res.render('editEntry',{entry: data.entries[id]});
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

