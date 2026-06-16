# temp-converter

Utility functions for converting temperatures between Celsius and Fahrenheit.

## Installation

```bash
npm install
```

## Usage

```js
const { celsiusToFahrenheit, fahrenheitToCelsius } = require('./index');

// Celsius → Fahrenheit
celsiusToFahrenheit(0);      // 32   — water freezing point
celsiusToFahrenheit(100);    // 212  — water boiling point
celsiusToFahrenheit(37);     // 98.6 — normal body temperature
celsiusToFahrenheit(-40);    // -40  — crossover point (same in both scales)

// Fahrenheit → Celsius
fahrenheitToCelsius(32);     // 0
fahrenheitToCelsius(212);    // 100
fahrenheitToCelsius(98.6);   // 37
fahrenheitToCelsius(-40);    // -40

// Both functions throw TypeError for non-finite inputs
celsiusToFahrenheit('hot');      // TypeError
fahrenheitToCelsius(Infinity);   // TypeError
fahrenheitToCelsius(NaN);        // TypeError
```

## API

### `celsiusToFahrenheit(celsius: number): number`

Converts a temperature from Celsius to Fahrenheit using the formula `(C × 9/5) + 32`.

Throws `TypeError` if the argument is not a finite number.

### `fahrenheitToCelsius(fahrenheit: number): number`

Converts a temperature from Fahrenheit to Celsius using the formula `(F − 32) × 5/9`.

Throws `TypeError` if the argument is not a finite number.

## Tests

```bash
npm test
```
