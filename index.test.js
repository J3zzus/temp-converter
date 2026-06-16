const { celsiusToFahrenheit, fahrenheitToCelsius } = require('./index');

describe('celsiusToFahrenheit', () => {
  describe('known reference points', () => {
    test('water freezing point: 0°C → 32°F', () => {
      expect(celsiusToFahrenheit(0)).toBe(32);
    });

    test('water boiling point: 100°C → 212°F', () => {
      expect(celsiusToFahrenheit(100)).toBe(212);
    });

    test('body temperature: 37°C → 98.6°F', () => {
      expect(celsiusToFahrenheit(37)).toBeCloseTo(98.6, 5);
    });

    test('equal crossover point: -40°C → -40°F', () => {
      expect(celsiusToFahrenheit(-40)).toBe(-40);
    });

    test('absolute zero: -273.15°C → -459.67°F', () => {
      expect(celsiusToFahrenheit(-273.15)).toBeCloseTo(-459.67, 2);
    });
  });

  describe('negative values', () => {
    test('-10°C → 14°F', () => {
      expect(celsiusToFahrenheit(-10)).toBe(14);
    });

    test('-100°C → -148°F', () => {
      expect(celsiusToFahrenheit(-100)).toBe(-148);
    });
  });

  describe('fractional values', () => {
    test('0.5°C converts correctly', () => {
      expect(celsiusToFahrenheit(0.5)).toBeCloseTo(32.9, 10);
    });

    test('negative fraction: -0.5°C converts correctly', () => {
      expect(celsiusToFahrenheit(-0.5)).toBeCloseTo(31.1, 10);
    });
  });

  describe('edge cases', () => {
    test('large positive value', () => {
      expect(celsiusToFahrenheit(1000)).toBe(1832);
    });

    test('large negative value', () => {
      expect(celsiusToFahrenheit(-1000)).toBe(-1768);
    });

    test('round-trips back through fahrenheitToCelsius', () => {
      const original = 36.6;
      expect(fahrenheitToCelsius(celsiusToFahrenheit(original))).toBeCloseTo(original, 10);
    });
  });

  describe('invalid input', () => {
    test.each([
      ['string', 'hot'],
      ['null', null],
      ['undefined', undefined],
      ['boolean', true],
      ['object', {}],
      ['array', []],
      ['NaN', NaN],
      ['Infinity', Infinity],
      ['-Infinity', -Infinity],
    ])('throws TypeError for %s', (_, input) => {
      expect(() => celsiusToFahrenheit(input)).toThrow(TypeError);
    });
  });
});

describe('fahrenheitToCelsius', () => {
  describe('known reference points', () => {
    test('water freezing point: 32°F → 0°C', () => {
      expect(fahrenheitToCelsius(32)).toBe(0);
    });

    test('water boiling point: 212°F → 100°C', () => {
      expect(fahrenheitToCelsius(212)).toBe(100);
    });

    test('body temperature: 98.6°F → 37°C', () => {
      expect(fahrenheitToCelsius(98.6)).toBeCloseTo(37, 5);
    });

    test('equal crossover point: -40°F → -40°C', () => {
      expect(fahrenheitToCelsius(-40)).toBe(-40);
    });

    test('absolute zero: -459.67°F → -273.15°C', () => {
      expect(fahrenheitToCelsius(-459.67)).toBeCloseTo(-273.15, 2);
    });
  });

  describe('negative values', () => {
    test('14°F → -10°C', () => {
      expect(fahrenheitToCelsius(14)).toBeCloseTo(-10, 10);
    });

    test('-148°F → -100°C', () => {
      expect(fahrenheitToCelsius(-148)).toBeCloseTo(-100, 10);
    });
  });

  describe('fractional values', () => {
    test('32.9°F converts correctly', () => {
      expect(fahrenheitToCelsius(32.9)).toBeCloseTo(0.5, 10);
    });
  });

  describe('edge cases', () => {
    test('large positive value', () => {
      expect(fahrenheitToCelsius(1832)).toBeCloseTo(1000, 10);
    });

    test('round-trips back through celsiusToFahrenheit', () => {
      const original = 98.6;
      expect(celsiusToFahrenheit(fahrenheitToCelsius(original))).toBeCloseTo(original, 10);
    });
  });

  describe('invalid input', () => {
    test.each([
      ['string', 'cold'],
      ['null', null],
      ['undefined', undefined],
      ['boolean', false],
      ['object', {}],
      ['array', []],
      ['NaN', NaN],
      ['Infinity', Infinity],
      ['-Infinity', -Infinity],
    ])('throws TypeError for %s', (_, input) => {
      expect(() => fahrenheitToCelsius(input)).toThrow(TypeError);
    });
  });
});
