var mongoose = require('mongoose');

var entry_schema = mongoose.Schema({
    title: String,
    picture: String,
    recipe: String,
    category: Array,
    notes: String,
    datecreated: Date
});

var Entry = mongoose.model('Entry', entry_schema);

module.exports = Entry;
