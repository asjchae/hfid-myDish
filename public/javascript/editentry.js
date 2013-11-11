$(document).ready(function(){
        populateEditEntry();
});

function populateEditEntry(){
        var cats = $('#catsdisplay').text();
        var res = cats.split(",");
        for (var i = 0; i < res.length; i++) {
                var option = $("option[value='"+res[i]+"']");
                console.log(option.val());
                $("option[value='"+res[i]+"']").attr('selected','selected');
        }
        $('#multiselect').selectmenu("refresh",true);
}

function editEntryCats(){
        var categories = $("option:selected").map(function(){ return this.value }).get().join(", ");
        $("#catsdisplay").text(categories);
}