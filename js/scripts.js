$(document).ready(function() {
  $("#triangle").submit(function(event) {
    var sideA = $("input#side1").val();
    var sideB = $("input#side2").val();
    var sideC = $("input#side3").val();

    if ((sideA + sideB < sideC) || (sideA + sideC < sideB) || (sideB + sideC < sideA)) {
        $("#none").show();

    } else if (sideA === sideB && sideB === sideC && sideA === sideC) {
        $("#equilateral").show();

    } else if ((sideA === sideB) || (sideA === sideC) || (sideB === sideC)) {
       $("#isosceles").show();

    } else {
      $("#scalene").show();



    }
  event.preventDefault();
  });

});
