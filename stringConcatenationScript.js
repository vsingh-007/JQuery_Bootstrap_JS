// JavaScript source code
$(document).ready(function () {
    $("h4").css("color", "blue");
    $("#concat").click(function () {

        var txt1 = $("#in4").val();
        var txt2 = $("#in5").val();
        $("#res1").val(txt1+txt2);

    });

});