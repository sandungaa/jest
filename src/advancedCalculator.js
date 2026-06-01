export default class AdvancedCalculator {
  // Calcula la potencia de un número base elevado a un exponente.
  power(base, exponent) {
    if (typeof base !== 'number' || typeof exponent !== 'number') {
      throw new Error('both arguments must be numbers');
    }
    return Math.pow(base, exponent);
  }

  // Raíz cuadrada de un número.
  squareRoot(number) {
    if (number < 0) {
      throw new Error('square root of negative numbers is not allowed');
    }
    if (typeof number !== 'number') {
      throw new Error('argument must be a number');
    }
    return Math.sqrt(number);
  }

  // Verifica si un número es par.
  isEven(number) {
    if (typeof number !== 'number') {
      throw new Error('argument must be a number');
    }
    return number % 2 === 0;
  }

  // Verifica si un número es primo.
  isPrime(number) {
    if (number < 2) {
      return false;
    }
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
} 
