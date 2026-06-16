# temp-converter

Utility functions for converting temperatures between Celsius, Fahrenheit, and Kelvin.

## Installation

```bash
npm install
```

## Usage

```js
const {
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  celsiusToKelvin,
  kelvinToCelsius,
  fahrenheitToKelvin,
  kelvinToFahrenheit,
} = require('./index');

// Celsius → Fahrenheit
celsiusToFahrenheit(0);      // 32   — water freezing point
celsiusToFahrenheit(100);    // 212  — water boiling point
celsiusToFahrenheit(37);     // 98.6 — normal body temperature
celsiusToFahrenheit(-40);    // -40  — crossover point (same in both scales)

// Fahrenheit → Celsius
fahrenheitToCelsius(32);     // 0
fahrenheitToCelsius(212);    // 100
fahrenheitToCelsius(98.6);   // ~37
fahrenheitToCelsius(-40);    // -40

// Celsius → Kelvin
celsiusToKelvin(0);          // 273.15 — water freezing point
celsiusToKelvin(100);        // 373.15 — water boiling point
celsiusToKelvin(-273.15);    // 0      — absolute zero

// Kelvin → Celsius
kelvinToCelsius(273.15);     // 0
kelvinToCelsius(373.15);     // 100
kelvinToCelsius(0);          // -273.15

// Fahrenheit → Kelvin
fahrenheitToKelvin(32);      // 273.15
fahrenheitToKelvin(212);     // 373.15

// Kelvin → Fahrenheit
kelvinToFahrenheit(273.15);  // 32
kelvinToFahrenheit(373.15);  // 212

// All functions throw TypeError for non-finite inputs
celsiusToKelvin('warm');     // TypeError
kelvinToCelsius(Infinity);   // TypeError
fahrenheitToKelvin(NaN);     // TypeError
```

## API

### `celsiusToFahrenheit(celsius: number): number`

Converts Celsius to Fahrenheit using `(C × 9/5) + 32`. Throws `TypeError` for non-finite input.

### `fahrenheitToCelsius(fahrenheit: number): number`

Converts Fahrenheit to Celsius using `(F − 32) × 5/9`. Throws `TypeError` for non-finite input.

### `celsiusToKelvin(celsius: number): number`

Converts Celsius to Kelvin using `K = C + 273.15`. Throws `TypeError` for non-finite input.

### `kelvinToCelsius(kelvin: number): number`

Converts Kelvin to Celsius using `C = K − 273.15`. Throws `TypeError` for non-finite input.

### `fahrenheitToKelvin(fahrenheit: number): number`

Converts Fahrenheit to Kelvin via Celsius. Throws `TypeError` for non-finite input.

### `kelvinToFahrenheit(kelvin: number): number`

Converts Kelvin to Fahrenheit via Celsius. Throws `TypeError` for non-finite input.

## Tests

```bash
npm test
```
