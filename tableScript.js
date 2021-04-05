$(document).ready(function () {

    $("#table").click(function () {

        var numm = $("#in6").val();
        if (numm != 0) {
            for ($i = 1; $i <= 10; $i++) {
                var tbl = numm * $i;
                var ttbl = $("#tbl").append("<tr><td style=\"background-color:pink;color:maroon;width:550px;text-align:center\">" + tbl + "</td></tr>");
            }
        }
        else {
            alert("Wrong Input. Try Again With Valid Number");
        }

    });

});