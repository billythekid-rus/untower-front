/**
 * Created by petrorlov on 11/07/2017.
 */
// function getSettingUrl(filePath) {
//     $.get(filePath, function(response) {
//         alert("URL return1: " + response);
//         return response;
//     });
//
// }


function getTasks(url) {
    $.getJSON(url, function (data) {

        var all_main_tasks = data['all_main_tasks'].split(',');

        setTaskMenu(all_main_tasks);
    });
}


function setTaskMenu(input_data) {
    var cList = $('#example');

    $.each(input_data, function(i) {
        $('<option/>').html(input_data[i]).appendTo(cList);
    });
}

$(document).ready(function() {

    // alert("Url init2: " + apiUrl);

    getTasks(apiUrl);
});