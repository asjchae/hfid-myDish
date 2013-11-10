$(window).ready(function(){
	resizePage();
});

var Entry = require('../models/entry_schema')
    , mongoose = require('mongoose');

function resizePage(){
	if ($('.body-container').height() < 600){
		$('.body-container').height(600);
	}
}

function changeFunc(){
	$('#multiselect').onchange(function(){
			var selected = $('#multiselect').options[$('#multiselect').selectedIndex].value;
	});
}


