function calculate() {
    var start = performance.now();
    var n = document.getElementById("n").value;
    var dataString = '?n=' + n;
    if (n == '') {
        alert("Enter a number");
    } else {
        $.ajax({
            type: "GET",
            url: "calculate/" + dataString,
            cache: false,
            success: function(response) {
                var end = performance.now();
                var time = end - start;
                document.getElementById("result").innerHTML = "Result: <b>" + response + "</b>";
                document.getElementById("time").innerHTML = "Time taken: " + time + "ms";
            },
            error: function() {
                alert("Could not get fibonacci number. Try giving a smaller value and working your way up from there.")
            }
        });
    }
    return false;
}
