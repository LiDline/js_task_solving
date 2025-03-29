import { getStrFromNumWithoutMinusAndComa } from '../additional/utils';
import { isNegative } from '../level_1/level_1_1';

/**
 * 3.5.1 Возвращает массив, в котором все слова начинаются на букву 'a'
 * @param str string
 * @return string[]
 */
export function extractWordsStartingWithA(str: string) {
  const array = str.split(' ');

  return array.filter((element) => element.startsWith('a'));
}

// -----------------------------------------------------------------------------------------------------

/**
 * 3.5.2 Возвращает массив, в котором все числа, которые делятся на 5
 * @param array number[]
 * @return number[]
 */
export function filterDivisibleByFive(array: number[]) {
  return array.filter((element) => element % 5 === 0);
}

// -----------------------------------------------------------------------------------------------------

/**
 * 3.5.3, 3.5.4 Возвращает массив, в котором числа, содержащие цифру
 * @param array number[]
 * @return number[]
 */
export function filterNumbersContainingNumber(array: number[], findElement = 0) {
  return array.filter((element) =>
    getStrFromNumWithoutMinusAndComa(element).includes(String(findElement)),
  );
}

// -----------------------------------------------------------------------------------------------------

/**
 * 3.5.5 Возвращает число с отсортированными цифрами
 * @param num number
 * @return number
 */
export function sortDigits(num: number) {
  const negative = isNegative(num);

  const numToStrWithoutMinus = String(Math.abs(num));
  const indexComa = numToStrWithoutMinus.indexOf('.');

  const numToStrWithoutMinusAndComa = numToStrWithoutMinus.replace('.', '');

  const sortedDigits = numToStrWithoutMinusAndComa
    .split('')
    .sort((a, b) => +a - +b)
    .join('');

  const sortedDigitsWithComa =
    indexComa != -1
      ? sortedDigits.slice(0, indexComa) + '.' + sortedDigits.slice(indexComa, sortedDigits.length)
      : sortedDigits;

  return Number(sortedDigitsWithComa) * (negative ? -1 : 1);
}

// -----------------------------------------------------------------------------------------------------

/**
 * 3.5.6 Возвращает строку с разделителем -
 * @return string
 */
export function generateDashSeparatedString() {
  const randomArray = Array.from({ length: 5 }, (_, k) => k + 1);

  return '-' + randomArray.join('-') + '-';
}

// -----------------------------------------------------------------------------------------------------
