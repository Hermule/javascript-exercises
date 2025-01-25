const reverseString = function(string) {
    let newString = "";
    const strLength = string.length;
    for (let i = strLength - 1; i > - 1; i--){
        newString = newString.concat(string[i])
    }
    return newString;
};
reverseString("Hallo")
// Do not edit below this line
module.exports = reverseString;
