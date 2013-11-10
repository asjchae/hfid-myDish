$(window).ready(function(){
	resizePage();
});

function resizePage(){
	if ($('.body-container').outerHeight() < 600){
		$('.body-container').outerHeight(600);
	}
}

function editEntryCats(){
	var categories = $("option:selected").map(function(){ return this.value }).get().join(", ");
	$("#catsdisplay").text(categories);
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
