import { isEvenNumber } from '../level_1/level_1_1';

/**
 * 2.7.1 Возвращает строку,в которой переводятся в верхний регистр все подстроки, в которых количество букв меньше или равно 3
 * @param str string
 * @return string
 */
export function uppercaseShortWords(str: string) {
  const newStr: string[] = [];

  for (const element of str.split(' ')) {
    newStr.push(...[element.length <= 3 ? element.toUpperCase() : element]);
  }

  return newStr.join(' ');
}

// -----------------------------------------------------------------------------------------------------

/**
 * 2.7.2 Возвращает в каком регистре символ
 * @param str string
 * @return string
 */
export function checkCharacterCase(str: string) {
  const isStr = /[a-zA-Z]/;

  if (str.length != 1 || !isStr.test(str)) {
    return 'neither';
  }

  if (str.toUpperCase() == str) {
    return 'uppercase';
  }

  return 'lowercase';
}

// -----------------------------------------------------------------------------------------------------

/**
 * 2.7.3 Возвращает число, в котором удалены все нечётные цифры
 * @param str number
 * @return number
 */
export function removeOddDigits(num: number) {
  const newNumInStr: string[] = [];

  for (const element of String(num)) {
    if (!Number.isNaN(Number(element)) && !isEvenNumber(Number(element))) {
      continue;
    }

    newNumInStr.push(element);
  }

  const newNum = Number(newNumInStr.join(''));

  return Number.isNaN(newNum) ? 0 : newNum;
}
