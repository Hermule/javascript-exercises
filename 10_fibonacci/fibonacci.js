const fibonacci = function(indexOfFibonacciSequence) {
    let lastValue = 0;
    let currentValue = 0;
    let helperInt = 0;
    let parsedIndex = parseInt(indexOfFibonacciSequence); 

    if (parsedIndex == NaN || parsedIndex < 0){
        return 'OOPS';
    }
    if (parsedIndex == 1){
        return 1;
    }
    for (let i = 0; i < parsedIndex; i++){
        if (i == 1){
            currentValue = 1;
        }
        helperInt = currentValue;
        currentValue += lastValue;
        lastValue = helperInt;
    }
    return currentValue;
};

// Do not edit below this line
module.exports = fibonacci;
