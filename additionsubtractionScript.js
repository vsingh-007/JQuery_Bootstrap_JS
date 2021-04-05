$(document).ready(function () {

    $("#add").click(function () {

        var in1 = $("#in1").val();
        var in2 = $("#in2").val();
        $("#res").val(parseInt(in1) + parseInt(in2));

    });

    $("#subtract").click(function () {

        var in1 = $("#in1").val();
        var in2 = $("#in2").val();
        $("#res").val(parseInt(in1) - parseInt(in2));

    });

});