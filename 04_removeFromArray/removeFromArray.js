const removeFromArray = function(inputArray, ...args) {
    
    argsArray = args;
    numOfArgs = argsArray.length - 1;

    for(let i = numOfArgs; i >= 0; i--){

        let thingToDelete = argsArray[i];
        let indexToDelete = inputArray.indexOf(thingToDelete)
        inputArray.splice(indexToDelete, 1)

    }

    return inputArray
};

// Do not edit below this line
module.exports = removeFromArray;
