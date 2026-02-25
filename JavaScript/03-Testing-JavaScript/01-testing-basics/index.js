export function capitalize(string) {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export function reverseString(string) {
    return string.split('').reverse().join('');
}

export const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};


export function caesarCipher(str, shift) {
  return str
    .split('')
    .map((char) => {
      if (char.match(/[a-z]/i)) {
        const code = char.charCodeAt(0);
        const isUpperCase = code >= 65 && code <= 90;
        const start = isUpperCase ? 65 : 97;
        
        // Formule magique pour le décalage avec rotation (wrapping)
        return String.fromCharCode(((code - start + shift) % 26) + start);
      }
      return char; // On renvoie tel quel si ce n'est pas une lettre
    })
    .join('');
}

export function analyzeArray(arr) {
    return {
        average: arr.reduce((a, b) => a + b, 0) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    }
}