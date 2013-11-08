//Resize the height of the page

function resizePage(){
	
}

function setClickableBack(){
	$('back').css({})
	$('.back').click(function() {
		parent.history.back();
	});
}

$(window).ready(function(){
	resizePage();
	setClickableBack();
});