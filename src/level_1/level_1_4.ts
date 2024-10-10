/**
 * 1.4.1 Возвращает массив целых чисел от 1 до 100.
 * @return number[]
 */
export function getNumbersFrom1To100() {
  const array = Array.from({ length: 100 }, (_, index) => index + 1);

  return array;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 1.4.2 Возвращает массив целых чисел от -100 до 0.
 * @return number[]
 */
export function getIntegersFromMinus100ToZero() {
  const array: number[] = [];

  for (let i = -100; i <= 0; i++) {
    array.push(i);
  }

  return array;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 1.4.3 Возвращает массив целых чисел от 100 до 1
 * @return number[]
 */
export function getIntegersFrom100To1() {
  return getNumbersFrom1To100().reverse();
}

// -----------------------------------------------------------------------------------------------------

/**
 * 1.4.4 Возвращает массив целых четных чисел от 1 до 100.
 * @return number[]
 */
export function getEvenNumbersFrom1To100() {
  const array = Array.from({ length: 50 }, (_, index) => (index + 1) * 2);

  return array;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 1.4.5 Возвращает массив целых чисел, которые кратные трём в промежутке от 1 до 100.
 * @return number[]
 */
export function getMultiplesOfThreeFrom1To100() {
  const array: number[] = [];

  for (let i = 1; i <= 100; i++) {
    if (i % 3 != 0) continue;

    array.push(i);
  }

  return array;
}

// -----------------------------------------------------------------------------------------------------
