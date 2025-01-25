const palindromes = function (_string) {
    let string = _string.replace(/[^\w\']|_/g, "").toLowerCase();
    for (let i = 0; i < string.length; i++)
    {
        if (string.charAt(i) != string.charAt(string.length - i - 1)){
            return false;
        }
    }
    return true;
};
palindromes('Animal loots foliated detail of stool lamina.');
// Do not edit below this line
module.exports = palindromes;
