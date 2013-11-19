$(document).ready(function(){
	resizePage();
	$('body').css('background-color','#d9d9d9');
	var hi = $('.meal-entry').html();
	console.log(hi);
});

function resizePage(){
	if ($('body').height() < 600){
		$('body').height(600);
		$('body').height(600);
	}
}

function changeFunc(entries){
	var categories = $("option:selected").map(function(){ return this.value }).get().join(", ");
	console.log(categories);
	// Categories exist!
};


// $(function changeCat() {
// 	var categories = $("option:selected").map(function() {return this.value}).get().join(", ");
// 	$.post("/selectedcategories", {category: categories}, function (data) {
// 		window.location = data.redirect;
// 	});
// });