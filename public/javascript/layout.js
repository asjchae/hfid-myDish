$(window).ready(function(){
	resizePage();
});

function resizePage(){
	if ($('.body-container').height() < 600){
		$('.body-container').height(600);
	}
}

function changeFunc(){
	var categories = $("option:selected").map(function(){ return this.value }).get().join(", ");
	$('#hi').text(categories);
}

var Entry = require('../models/entry_schema')
    , mongoose = require('mongoose');
