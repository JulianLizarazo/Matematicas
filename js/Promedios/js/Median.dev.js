"use strict";

function median(medianArray) {
  var evenArray = parseInt(medianArray.length / 2);
  var median;

  if (medianArray.length % 2 === 0) {
    var element1 = medianArray[evenArray - 1];
    var element2 = medianArray[evenArray];
    median = (element1 + element2) / 2;
  } else {
    median = medianArray[evenArray];
  }

  return median;
}

function resultMedian() {
  var inputAverage = document.getElementById("InputMMM").value;
  var arrayValue = new Array();
  arrayValue = inputAverage.split(",").map(function (i) {
    return Number(i);
  });
  arrayValue = arrayValue.sort(function (a, b) {
    return a - b;
  });
  var medianValue = median(arrayValue);
  var text = document.getElementById("ResultMMM");
  text.innerText = "La mediana es: " + medianValue;
}