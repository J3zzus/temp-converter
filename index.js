/**
 * Converts a temperature from Celsius to Fahrenheit.
 *
 * @param {number} celsius - Temperature in degrees Celsius.
 * @returns {number} Temperature in degrees Fahrenheit.
 * @throws {TypeError} If the argument is not a finite number.
 *
 * @example
 * celsiusToFahrenheit(0);   // 32
 * celsiusToFahrenheit(100); // 212
 * celsiusToFahrenheit(-40); // -40
 */
function celsiusToFahrenheit(celsius) {
  if (typeof celsius !== 'number' || !Number.isFinite(celsius)) {
    throw new TypeError(`Expected a finite number, got ${typeof celsius}`);
  }
  return (celsius * 9) / 5 + 32;
}

/**
 * Converts a temperature from Fahrenheit to Celsius.
 *
 * @param {number} fahrenheit - Temperature in degrees Fahrenheit.
 * @returns {number} Temperature in degrees Celsius.
 * @throws {TypeError} If the argument is not a finite number.
 *
 * @example
 * fahrenheitToCelsius(32);  // 0
 * fahrenheitToCelsius(212); // 100
 * fahrenheitToCelsius(-40); // -40
 */
function fahrenheitToCelsius(fahrenheit) {
  if (typeof fahrenheit !== 'number' || !Number.isFinite(fahrenheit)) {
    throw new TypeError(`Expected a finite number, got ${typeof fahrenheit}`);
  }
  return ((fahrenheit - 32) * 5) / 9;
}

module.exports = { celsiusToFahrenheit, fahrenheitToCelsius };
