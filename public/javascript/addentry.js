// Javascript for creating a new entry

$(window).ready(function(){
	$('#multiselect').multiselect();
	$('#other').click(function() {
		//Add a new category
		var value = $("#other").val();
		$('#multiselect').append("<option value=\"" + value + "\">" + value + "</option>");
		$('#multiselect').multiselect('refresh');
	});

	$('#newentry').on('submit', function(){
		var title = $('#title').val();
		var picture = $('#picture').attr("src");
		var recipe = $('#recipe').val();
		var notes = $('#notes').val();
		var category = $('#multiselect').getChecked();
	});
})

