/**
 * 1.8.1 Возвращает массив целых чисел от 1 до 10.
 * @return number[]
 */
export function getIntegersFrom1To10() {
  const array = Array.from({ length: 10 }, (_, k) => k + 1);

  return array;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 1.8.2 Возвращает массив целых чётных чисел из промежутка от 1 до 100. - копия 1.4.4
 */

// -----------------------------------------------------------------------------------------------------

/**
 * 1.8.3 Возвращает массив с округлёнными до 1-го знака числами.
 * @param array number[]
 * @return number[]
 */
export function getRoundedToOneDecimal(array: number[]) {
  return array.map((num) => +num.toFixed(1));
}
