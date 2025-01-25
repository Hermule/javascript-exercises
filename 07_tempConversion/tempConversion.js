const convertToCelsius = function(temperatureInFahrenheit) {
  let temperatureinCelsius = (temperatureInFahrenheit - 32) * (5/9);
  return Math.round(temperatureinCelsius * 10) / 10;
};

const convertToFahrenheit = function(temperatureinCelsius) {
  let temperatureInFahrenheit = (temperatureinCelsius * 9/5) +32;
  return Math.round(temperatureInFahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
