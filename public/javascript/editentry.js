$(document).ready(function(){
	populateEditEntry();
});

function populateEditEntry(){
	var cats = $('#catdisplay').text();
	var res = cats.split(",");
	for (String cat: res) {
		console.log(cat);
		$('select[name="options"]').find('option:contains('+cat+')').attr("selected",true);	
	}
}

function editEntryCats(){
	var categories = $("option:selected").map(function(){ return this.value }).get().join(", ");
	$("#catdisplay").text(categories);
}