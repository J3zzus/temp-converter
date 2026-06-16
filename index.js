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

/**
 * Converts a temperature from Celsius to Kelvin.
 *
 * @param {number} celsius - Temperature in degrees Celsius.
 * @returns {number} Temperature in Kelvin.
 * @throws {TypeError} If the argument is not a finite number.
 *
 * @example
 * celsiusToKelvin(0);      // 273.15
 * celsiusToKelvin(-273.15) // 0
 * celsiusToKelvin(100);    // 373.15
 */
function celsiusToKelvin(celsius) {
  if (typeof celsius !== 'number' || !Number.isFinite(celsius)) {
    throw new TypeError(`Expected a finite number, got ${typeof celsius}`);
  }
  return celsius + 273.15;
}

/**
 * Converts a temperature from Kelvin to Celsius.
 *
 * @param {number} kelvin - Temperature in Kelvin.
 * @returns {number} Temperature in degrees Celsius.
 * @throws {TypeError} If the argument is not a finite number.
 *
 * @example
 * kelvinToCelsius(273.15); // 0
 * kelvinToCelsius(0);      // -273.15
 * kelvinToCelsius(373.15); // 100
 */
function kelvinToCelsius(kelvin) {
  if (typeof kelvin !== 'number' || !Number.isFinite(kelvin)) {
    throw new TypeError(`Expected a finite number, got ${typeof kelvin}`);
  }
  return kelvin - 273.15;
}

/**
 * Converts a temperature from Fahrenheit to Kelvin.
 *
 * @param {number} fahrenheit - Temperature in degrees Fahrenheit.
 * @returns {number} Temperature in Kelvin.
 * @throws {TypeError} If the argument is not a finite number.
 *
 * @example
 * fahrenheitToKelvin(32);  // 273.15
 * fahrenheitToKelvin(212); // 373.15
 */
function fahrenheitToKelvin(fahrenheit) {
  return celsiusToKelvin(fahrenheitToCelsius(fahrenheit));
}

/**
 * Converts a temperature from Kelvin to Fahrenheit.
 *
 * @param {number} kelvin - Temperature in Kelvin.
 * @returns {number} Temperature in degrees Fahrenheit.
 * @throws {TypeError} If the argument is not a finite number.
 *
 * @example
 * kelvinToFahrenheit(273.15); // 32
 * kelvinToFahrenheit(373.15); // 212
 */
function kelvinToFahrenheit(kelvin) {
  return celsiusToFahrenheit(kelvinToCelsius(kelvin));
}

module.exports = {
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  celsiusToKelvin,
  kelvinToCelsius,
  fahrenheitToKelvin,
  kelvinToFahrenheit,
};
