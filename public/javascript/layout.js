//Resize the height of the page

function resizePage(){
	if ($('.body-container').height() < 600){
		$('.body-container').height(600);
	}
}

function setClickableBack(){
	$('.back').click(function() {
		parent.history.back();
	});
}

function searchFunction(){
	
}

$(window).ready(function(){
	resizePage();
	setClickableBack();
	searchFunction();
});