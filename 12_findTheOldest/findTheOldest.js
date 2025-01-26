const findTheOldest = function(people) {
    let oldestPerson;
    let oldestYear = 0;
    for (person of people){
        let age = 0;
        let birthYear = person["yearOfBirth"];
        if ("yearOfDeath" in person){
            age = person["yearOfDeath"] - birthYear;
        }
        else {
            age = new Date().getFullYear() - birthYear;
        }
        if (age > oldestYear){
            oldestPerson = person;
            oldestYear = age;
        }
    }

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
