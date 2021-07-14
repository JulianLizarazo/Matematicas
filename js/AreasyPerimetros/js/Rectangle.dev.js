"use strict";

function areaRectangle(base, height) {
  return base * height;
}

function resultAreaRectangle() {
  var inputBase = document.getElementById("InputBase");
  var inputHeight = document.getElementById("InputHeight");
  var valueBase = parseInt(inputBase.value);
  var valueHeight = parseInt(inputHeight.value);
  var area = areaRectangle(valueBase, valueHeight);
  var text = document.getElementById("ResultAreaRectangle");
  text.innerText = "El area es de " + area + " m²";
}

function perimeterRectangle(base, height) {
  return 2 * base + 2 * height;
}

function resultPerimeterRectangle() {
  var inputBase = document.getElementById("InputBaseP");
  var inputHeight = document.getElementById("InputHeightP");
  var valueBase = parseInt(inputBase.value);
  var valueHeight = parseInt(inputHeight.value);
  var perimeter = perimeterRectangle(valueBase, valueHeight);
  var text = document.getElementById("ResultPerimeterRectangle");
  text.innerText = "El perimetro es de " + perimeter + " m";
}