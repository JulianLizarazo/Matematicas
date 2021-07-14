"use strict";

function areaCircle(radius) {
  return Math.PI * Math.pow(radius, 2);
}

function resultAreaCircle() {
  var inputRadius = document.getElementById("InputRadio");
  var valueRadius = parseInt(inputRadius.value);
  var area = areaCircle(valueRadius);
  var text = document.getElementById("ResultAreaCircle");
  text.innerText = "El area es de " + area.toFixed(2) + " m²";
}

function perimeterCircle(radius) {
  return 2 * Math.PI * radius;
}

function resultPerimeterCircle() {
  var inputRadius = document.getElementById("InputRadioP");
  var valueRadius = parseInt(inputRadius.value);
  var perimeter = perimeterCircle(valueRadius);
  var text = document.getElementById("ResultPerimeterCircle");
  text.innerText = "El perimetro es de " + perimeter.toFixed(2) + " m";
}