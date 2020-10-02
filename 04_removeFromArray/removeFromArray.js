const removeFromArray = function(inputArray, ...elementsArray) {
    // To pick each element in elementsArray, I will use a for loop.
    for (let i = 0; i < elementsArray.length; i++) {
        // To check whether the picked element exists in inputArray, I'll use
        // an if statement.
        if (inputArray.includes(elementsArray[i])) {
            // To check whether the existing element exist more than once, I'll 
            // use a while loop.
            while (inputArray.includes(elementsArray[i])) {
                let elementIndex = inputArray.indexOf(elementsArray[i]);     
                // Every time the while loop finds the picked element, it is going to
                // remove it.    
                inputArray.splice(elementIndex,1);
            }
        } else {
            inputArray
        }
    }
    return inputArray;
}
module.exports = removeFromArray
// let inputArray = [1, 2, 3, 4];
// removeFromArray(inputArray, 7, "1");
// console.log (inputArray);