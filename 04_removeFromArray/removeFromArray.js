const removeFromArray = function(...args) {
    
    const inputArray = args[0];
    const outputArray = [];

    inputArray.forEach(element => {

        if(!args.includes(element)){
          outputArray.push(element);  
        };
        
    });
    
    // numOfArgs = argsArray.length - 1;

    // for(let i = numOfArgs; i >= 0; i--){

        // let thingToDelete = argsArray[i];
        // let indexToDelete = inputArray.indexOf(thingToDelete)
        // inputArray.splice(indexToDelete, 1)

    // }

    // return inputArray

    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
