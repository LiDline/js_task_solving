import { getStrFromNumWithoutMinusAndComa } from '../additional/utils';
import { isEvenNumber } from '../level_1/level_1_1';

/**
 * 3.3.1 Возвращает массив, в котором удалены слова, состоящие более чем из трех символов
 * @param array string[]
 * @return string[]
 */
export function removeLongWords(array: string[]) {
  return array.filter((value) => value.length <= 3);
}

// -----------------------------------------------------------------------------------------------------

/**
 * 3.3.2 Проверяет, что все цифры числа являются нечётными
 * @param num number
 * @return boolean
 */
export function areAllDigitsOdd(num: number) {
  const numInString = getStrFromNumWithoutMinusAndComa(num);

  for (const element of numInString) {
    if (isEvenNumber(Number(element))) {
      return false;
    }
  }

  return true;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 3.3.3 Проверяет, что слово читается одинаково с любой стороны
 * @param str string
 * @return boolean
 */
export function isPalindrome(str: string) {
  const revereString = str.split('').reverse().join('');

  return revereString == str;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 3.3.4 Возвращает сумму подэлементов массива
 * @param array any[]
 * @return number
 */
export function sumOfElements(array: any[]) {
  const result = array.reduce((sum, current) => {
    if (typeof current === 'number') {
      return (sum += current);
    }

    return sum + sumOfElements(current);
  }, 0);

  return result;
}
