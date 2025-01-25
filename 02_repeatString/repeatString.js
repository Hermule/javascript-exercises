const repeatString = function(string, number) {
    if (number < 0){
        return "ERROR"
    }
    concatedString = "";
    for (let i = 0; i < number; i++){
        concatedString = concatedString.concat(string);
    }
    return concatedString
};
repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;
