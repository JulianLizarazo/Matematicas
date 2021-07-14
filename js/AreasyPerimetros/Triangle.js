console.group("Triangles")


function perimeterTriangle(sideA,sideB,sideC){
    
    var perimeter = parseInt(sideA + sideB + sideC);
    console.log(perimeter);
    
    return perimeter;
    

}

function resultPerimeterTriangle(){
    var inputA = document.getElementById("InputA"); 
    var inputB = document.getElementById("InputB"); 
    var inputC = document.getElementById("InputC"); 
    var valueA = parseInt(inputA.value); 
    var valueB = parseInt(inputB.value); 
    var valueC = parseInt(inputC.value); 
    var perimeter = perimeterTriangle(valueA, valueB, valueC);

    

    var text = document.getElementById("ResultPerimeterTriangle");

    text.innerText = "El perimetro es de " + perimeter + " m";
    
}

function areaTriangle(base,height){
    return (base * height) / 2; 

}

function resultAreaTriangle(){
    var inputBase = document.getElementById("InputBase"); 
    var inputHeight = document.getElementById("InputHeight"); 
    
    var valueBase = parseInt(inputBase.value); 
    var valueHeight = parseInt(inputHeight.value); 
   
    var area = areaTriangle(valueBase, valueHeight);

    

    var text = document.getElementById("ResultAreaTriangle");

    text.innerText = "El area es de " + area + " m²";
}



console.groupEnd();