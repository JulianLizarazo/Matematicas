function arithmeticAverage(averageArray){
    let averageResult = averageArray.reduce(
        function(acumulatedValue = 0, newElement){
            return acumulatedValue + newElement;
        }
    );

    averageResult = averageResult / averageArray.length;
    
    return averageResult;

    
}

function resultArithmeticValue(){
    var inputAverage = document.getElementById("InputMMM").value;
    
    var averageArray = new Array();

    averageArray = inputAverage.split(",").map(i=>Number(i));

    var average = arithmeticAverage(averageArray);
    

    var text = document.getElementById("ResultMMM");

    text.innerText = "El promedio es: " + average;


}
