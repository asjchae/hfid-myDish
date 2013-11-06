exports.addEntry = function (req, res) {
	res.render('addEntry');
};

exports.editEntry = function (req, res) {
	res.render('editEntry');
};


// Everything below was brought over from api.js

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

// POST

// exports.addEntry = function (req, res) {
//   data.entries.push(req.body);
//   res.json(req.body);
// };

// PUT

// exports.editEntry = function (req, res) {
//   var id = req.params.id;

//   if (id >= 0 && id < data.entries.length) {
//     data.entries[id] = req.body;
//     res.json(true);
//   } else {
//     res.json(false);
//   }
// };

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