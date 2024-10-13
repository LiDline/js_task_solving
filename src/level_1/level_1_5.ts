/**
 * 1.5.1 Возвращает сумму всех целых чисел от 1 до 100.
 * @return number
 */
export function getSum1To100() {
  let sum = 0;

  for (let i = 1; i <= 100; i++) {
    sum += i;
  }

  return sum;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 1.5.2 Возвращает сумму всех целых чётных чисел от 1 до 100.
 * @return number
 */
export function getSumForEven1To100() {
  let sum = 0;

  for (let i = 1; i <= 100; i++) {
    if (i % 2 != 0) continue;

    sum += i;
  }

  return sum;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 1.5.3 Возвращает сумму всех целых нечетных чисел от 1 до 100.
 * @return number
 */
export function getSumForNotEven1To100() {
  let sum = 0;

  for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) continue;

    sum += i;
  }

  return sum;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 1.5.4 Возвращает остаток от деления первого числа на второе.
 * @param numerator number
 * @param denominator number
 * @return number
 */
export function getRemainder(numerator: number, denominator: number) {
  return numerator % denominator;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 1.5.5 Возвращает перевёрнутую строку.
 * @param str string
 * @return string
 */
export function getCharsFromEnd(str: string) {
    return str.split('').reverse().join('');
  }
  
  // -----------------------------------------------------------------------------------------------------
