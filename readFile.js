var fs = require('fs');


var numbersFileContents = undefined
var numberArray
var alphabeticalArray = new Array()

function findLettersNumbers(callback) {
  fs.readFile('number.txt', "utf-8", function doneReading(err, fileContents) {
    numbersFileContents = fileContents
    numberArray = numbersFileContents.split("\n") // Split the numbers into an array
    callback(printOutBothArrays) // I'm the callback that is defined in the addOne constructor
  });
}

// This gets called as a callback for addOne function
function lognumberArray(callback) {
  for(var i=0; i<numberArray.length; i++){
  	if(isNaN(numberArray[i])){
  		alphabeticalArray.push(numberArray[i])
  		numberArray.splice(i, 1)
  	}

  	// console.log("In array - " + numberArray[i]);
  }
  callback() // I get ran when the 
}


function printOutBothArrays(){
	console.log("Numerical array: ")
	for(var i=0;i<numberArray.length;i++){
		console.log("Number - " + numberArray[i])
	}
	console.log("Alphabetical array: ")
	for(var i=0;i<alphabeticalArray.length;i++){
		console.log("Word - " + alphabeticalArray[i])
	}
}

findLettersNumbers(lognumberArray)