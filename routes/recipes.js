

exports.addEntry = function (req, res) {
	res.render('addEntry');
};

exports.editEntry = function (req, res) {
  var id = req.params.id;
	res.render('editEntry',{entry: data.entries[id]});
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