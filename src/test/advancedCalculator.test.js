import AdvancedCalculator from '../advancedCalculator';

describe('advancedCalculator', () => {

  let calculator;
  beforeEach(() => { 
    calculator = new AdvancedCalculator();
  });

  test('power method calculates the power correctly', () => {
    expect(calculator.power(2, 3)).toBe(8);
  });

  test('power method throws an error when non-numeric arguments are provided', () => {
    expect(() => calculator.power(2, '3')).toThrowError(
      'both arguments must be numbers'
    );
  });

  //////////////////////////////////////////////////////////////////////////////////////////

  test('squareRoot method calculates the square root correctly', () => {
    expect(calculator.squareRoot(16)).toBe(4);

  });

  test('squareRoot method throws an error when a non-numeric argument is provided', () => {
    expect(() => calculator.squareRoot('16')).toThrowError(
      'argument must be a number'
    );
  });

  test('raiz cuadrada no acepta numeros negativos', () => {
    expect(() => calculator.squareRoot(-4)).toThrowError(
      'square root of negative numbers is not allowed'
    );
  });

  //////////////////////////////////////////////////////////////////////////////////////////

  test('isEven method checks if a number is even', () => {
    expect(calculator.isEven(4)).toBe(true);
    expect(calculator.isEven(0)).toBe(true);
  });

  test('chequea si es primo', () => {
    expect(calculator.isPrime(11)).toBe(true);
  });

  test('chequea si no es primo', () => {
    expect(calculator.isPrime(6)).toBe(false);
  });

  test('chequea si es menor a 2', () => {
    expect(calculator.isPrime(1)).toBe(false);
  });


  test('isEven method throws an error when a non-numeric argument is provided', () => {
    expect(() => calculator.isEven('4')).toThrowError(
      'argument must be a number'
    );
  });

  //////////////////////////////////////////////////////////////////////////////////////////


});