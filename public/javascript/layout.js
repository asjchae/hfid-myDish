var Entry = require('../models/entry_schema')
    , mongoose = require('mongoose');

//Resize the height of the page

function resizePage(){
	if ($('.body-container').height() < 600){
		$('.body-container').height(600);
	}
	$('.title').text("hi");
}


function setSelected(){
	$('#multiselect').onchange(function(){
			var selected = $('#multiselect').options[$('#multiselect').selectedIndex].value;
	$('.title').append(selected);
	});
}

$(window).ready(function(){
	resizePage();
	setSelected();
});