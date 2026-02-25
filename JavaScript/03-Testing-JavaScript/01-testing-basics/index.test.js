import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './index.js';

describe('Fonctions de base', () => {
  
  test('capitalize : met la première lettre en majuscule', () => {
    expect(capitalize('paris')).toBe('Paris');
  });

  test('reverseString : inverse une chaîne', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

});

describe('Calculator', () => {
  test('additionne deux nombres', () => {
    expect(calculator.add(2, 2)).toBe(4);
  });
 
  test('soustrait deux nombres', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
  });

  test('multiplie deux nombres', () => {
    expect(calculator.multiply(3, 4)).toBe(12);
  });

  test('divise deux nombres', () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });
});

describe('Caesar Cipher', () => {
  test('décalage simple', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd');
  });

  test('gère le passage de z à a (wrapping)', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
  });

  test('conserve la casse (minuscules / majuscules)', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  });

  test('ignore la ponctuation et les espaces', () => {
    expect(caesarCipher('Hello, World!', 5)).toBe('Mjqqt, Btwqi!');
  });
});

describe('Analyze Array', () => {
  test('retourne un objet avec la moyenne, le minimum, le maximum et la longueur', () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({ average: 3, min: 1, max: 5, length: 5 });
  });
});