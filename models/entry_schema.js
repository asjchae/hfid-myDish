var mongoose = require('mongoose');

var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;
var entry_schema = new Schema({
    title: String,
    picture: String,
    recipe: String,
    category: Array,
    notes: String,
    datecreated: Date,
});

var Entry = mongoose.model('Entry', entry_schema);

module.exports = Entry;
