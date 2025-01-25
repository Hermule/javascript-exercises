const add = function(firstInt, secondInt) {
	return firstInt + secondInt;
};

const subtract = function(firstInt, secondInt) {
	return firstInt - secondInt;
};

const sum = function(array) {
  let sum = 0;
  for (element of array){
    sum += element;
  }
  return sum;
};

const multiply = function(array) {
  let product = 1;
  for (element of array){
    product *= element
  }
  return product;
};

const power = function(base, power) {
	let product = 1;
  for (let i = 0; i < power; i++){
    product*=base
  }
  return product;
};

const factorial = function(factor) {
	product = 1;
  for (let i = factor; i > 0; i--){
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
