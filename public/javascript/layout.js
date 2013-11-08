//Resize the height of the page

function resizePage(){
	if ($('.body-container').height() < 600){
		$('.body-container').height(600);
	}
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