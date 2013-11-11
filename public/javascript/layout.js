$(document).ready(function(){
	resizePage();
	$('body').css('background-color','#d9d9d9');
});

function resizePage(){
	if ($('.page sarah-page"').height() < 600){
		$('.page sarah-page"').height(600);
		$('body').height(600);
	}
}

// function changeFunc(entries){
// 	var categories = $("option:selected").map(function(){ return this.value }).get().join(", ");
// 	$.post('/filter_entries'), {category: categories}, function(data) {
// 		window.location = data.redirect;
// 	});
// 	// Categories exist!
// };


// $(function changeCat() {
// 	var categories = $("option:selected").map(function() {return this.value}).get().join(", ");
// 	$.post("/selectedcategories", {category: categories}, function (data) {
// 		window.location = data.redirect;
// 	});
// });