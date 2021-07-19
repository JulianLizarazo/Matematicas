function mode(modeArray){
    var modeArrayCount = {};

    modeArray.map(
        function(element){

            if(modeArrayCount[element]){
                modeArrayCount[element]+=1;
            }else{
                modeArrayCount[element] = 1;
            }
            
        }
    );

    var modeCountArray = Object.entries(modeArrayCount).sort(
        function(a,b){
            return a[1] - b[1];
        }
    );

    var mode = modeCountArray[modeCountArray.length - 1];
    
    return mode[0];
}

function resultMode(){
    var inputAverage = document.getElementById("InputMMM").value;
    
    var arrayValue = new Array();

    arrayValue = inputAverage.split(",").map(i=>Number(i));
    
    arrayValue = arrayValue.sort(function(a,b){
        return a-b;
    });

    var modeValue = mode(arrayValue);

    var text = document.getElementById("ResultMMM");

    text.innerText = "La moda es: " + modeValue;
}