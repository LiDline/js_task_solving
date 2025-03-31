import { getStrFromNumWithoutMinusAndComa } from '../additional/utils';

/**
 * 3.6.1 Возвращает массив, в котором все числа состоят более чем из трех цифр
 * @param array number[]
 * @return number[]
 */
export function removeNumbersWithMoreThanThreeDigits(array: number[]) {
  return array.filter((element) => getStrFromNumWithoutMinusAndComa(element).length <= 3);
}

// -----------------------------------------------------------------------------------------------------

/**
 * 3.6.2 Проверяет, что все цифры числа больше нуля
 * @param num number
 * @return boolean
 */
export function areAllDigitsGreaterThanZero(num: number) {
  const numInString = getStrFromNumWithoutMinusAndComa(num);

  return !numInString.includes('0');
}

// -----------------------------------------------------------------------------------------------------

/**
 * 3.6.3 Сливает все элементы массива в один массив, разбив их посимвольно
 * @param array number[]
 * @return number[]
 */
export function flattenAndSplitArray(array: number[]) {
  const arrayInString = array.join('').split('').map(Number);

  return arrayInString;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 3.6.4 Возвращает сумму элементов массива или объекта
 * @param array any
 * @return number
 */
export function sumOfObjectOrArray(element: object[] | object) {
  const array = Array.isArray(element) ? element : Object.values(element);

  const result = array.reduce((sum, current) => {
    if (typeof current === 'number') {
      return (sum += current);
    }

    return sum + sumOfObjectOrArray(current);
  }, 0);

  return result;
}
