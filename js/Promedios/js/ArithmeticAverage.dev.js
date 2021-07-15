"use strict";

function arithmeticAverage(averageArray) {
  var averageResult = averageArray.reduce(function () {
    var acumulatedValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var newElement = arguments.length > 1 ? arguments[1] : undefined;
    return acumulatedValue + newElement;
  });
  averageResult = averageResult / averageArray.length;
  return averageResult;
}

function resultArithmeticValue() {
  var inputAverage = document.getElementById("InputMMM").value;
  var averageArray = new Array();
  averageArray = inputAverage.split(",").map(function (i) {
    return Number(i);
  });
  var average = arithmeticAverage(averageArray);
  var text = document.getElementById("ResultMMM");
  text.innerText = "El promedio es: " + average;
}