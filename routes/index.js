
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
      "datecreated": "11/4/2013"
    },
    {
      "title": "Chicken Noms2",
      "picture":"/images/shawarma.jpeg2",
      "notes": "fake notes2",
      "recipe": "fake recipe2",
      "category": "cat1#cat2#cat32",
      "datecreated": "11/4/20132"
    }
  ]
};


exports.entries = function (req, res) {
	var entries = [];
	  data.entries.forEach(function (entry, i) {
	    entries.push({
	      id: i,
	      title: entry.title,
	      picture: entry.picture,
	      notes: entry.notes,
	      recipe: entry.recipe,
	      category: entry.category,
	      datecreated: entry.datecreated,
	    });
	  });
	  res.json({
	    entries: entries
	  });
};

exports.entry = function (req, res) {
  var id = req.params.id;
  if (id >= 0 && id < data.entries.length) {
    res.json({
      entry: data.entries[id]
    });
  } else {
    res.json(false);
  }
};

exports.index = function(req, res){
  res.render('index', {entries: data.entries});
};

