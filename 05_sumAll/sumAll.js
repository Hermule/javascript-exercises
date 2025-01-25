const sumAll = function(firstInt, secondInt) {
    if (firstInt < 0 || secondInt < 0) {
        return 'ERROR';
    }

    if (typeof firstInt != "number" || typeof secondInt != "number"){
        return 'ERROR';
    }

    if (firstInt % 1 != 0 || secondInt % 1 != 0){
        return 'ERROR'
    }

    let result = 0;
    let smallerInt = Math.min(firstInt, secondInt);
    let largerInt = Math.max(firstInt, secondInt);

    for (let i = smallerInt; i <= largerInt; i++){
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
