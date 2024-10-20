import { getSumFromArray } from '../additional/utils';

/**
 * 2.3.1 Проверяет, что последняя буква первого слова совпадает с первой буквой второго слова
 * @param firstWord string
 * @param secondWord string
 * @return boolean
 */
export function isFirstLastLetterMatch(firstWord: string, secondWord: string) {
  return firstWord.split('').pop() == secondWord.split('').shift();
}

// -----------------------------------------------------------------------------------------------------

/**
 * 2.3.2 Возвращает позицию третьего нуля в строке
 * @param str string
 * @return number | null
 */
export function getThirdZeroPosition(str: string) {
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] == '0') {
      counter += 1;

      if (counter == 3) {
        return i;
      }
    }
  }

  return null;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 2.3.3 Возвращает сумму чисел в строке
 * @param str string
 * @return number
 */
export function getSumFromStr(str: string) {
  const array = str
    .split(',')
    .map((s) => +s)
    .filter((n) => !isNaN(n));

  return getSumFromArray(array);
}

// -----------------------------------------------------------------------------------------------------

/**
 * 2.3.4 Возвращает дату в объект
 * @param str YYYY-MM-DD
 * @return object | null
 */
export function convertDateToObject(str: string) {
  const regex = /\d{4}-\d{2}-\d{2}/;

  const truthy = regex.test(str);

  if (!truthy) {
    return null;
  }

  const array = str.split('-');

  return {
    year: array[0],
    month: array[1],
    day: array[2],
  };
}

// -----------------------------------------------------------------------------------------------------
