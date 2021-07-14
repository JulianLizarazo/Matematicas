
function areaSquare(side){
    return Math.pow(side,2);
}

function resultAreaSquare(){
    var inputSide = document.getElementById("InputLado");

    var valueSide = parseInt(inputSide.value);

    var area = areaSquare(valueSide);

    var text = document.getElementById("ResultAreaSquare");

    text.innerText = "El area es de " + area + " m²";

}

function perimeterSquare(side){
    return side*4;
}

function resultPerimeterSquare(){
    var inputSide = document.getElementById("InputLadoP");

    var valueSide = parseInt(inputSide.value);

    var perimeter = perimeterSquare(valueSide);

    var text = document.getElementById("ResultPerimeterSquare");

    text.innerText = "El perimetro es de " + perimeter + " m";
}