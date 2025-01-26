const getTheTitles = function(array) {
    let arrayOfTitles = [];
    for (keyValuePair of array) {
        arrayOfTitles.push(keyValuePair["title"]);
    }
    return arrayOfTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
