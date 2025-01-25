const removeFromArray = function(array, valueToRemove) {
    if (arguments.length > 1){
        let newArguments = Array.prototype.slice.call(arguments, 1);
        for (element of newArguments){
            let elementPosition;
            do {
                elementPosition = array.indexOf(element);
                if (elementPosition > -1){
                    array.splice(elementPosition, 1);
                }
            }
            while (elementPosition >= 0);
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
