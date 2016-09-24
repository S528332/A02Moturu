 function myFunction() {
    var y = document.getElementById("txt1").value;
    var z = document.getElementById("txt2").value;
    if(typeof y =="string"){}
    if (y.match(/[a-z]/i)) {
    // alphabet letters found
    alert("entered string, give number in basic pay");
}
if (z.match(/[a-z]/i)) {
    // alphabet letters found
    alert("entered string, give number in bonus");
}

    if(typeof z =="string"){}
    var x = ((+y)*12) + +z;
    document.getElementById("demo").innerHTML = x;
    $("#demo").html(x); 
    $("#demo").css("color", "lightblue");
    $("#demo").css("background-color", "blue");
  }