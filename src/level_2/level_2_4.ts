import { isNumber } from '../additional/utils';
import { isEvenNumber } from '../level_1/level_1_1';

/**
 * 2.4.1 Возвращает позицию первой цифры в строке
 * @param str string
 * @return number
 */
export function getFirstDigitInString(str: string) {
  for (let i = 0; i < str.length; i++) {
    const element = str[i];

    if (!isNaN(Number(element))) {
      return i;
    }
  }

  return -1;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 2.4.2 Принимает объект и возвращает массивы ключей и значений
 * @param obj object
 * @return [string[], any[]]
 */
export function extractKeysAndValues(obj: object): [string[], any[]] {
  const keys = Object.keys(obj);
  const values = Object.values(obj);

  return [keys, values];
}

// -----------------------------------------------------------------------------------------------------

/**
 * 2.4.3 Принимает число и возвращает количество четных цифр в этом числе
 * @param num number
 * @return number
 */
export function countOfEvenDigits(num: number) {
  const digits = Array.from(`${num}`);

  let counter = 0;

  for (const digit of digits) {
    counter += isNumber(digit) && isEvenNumber(+digit) ? 1 : 0;
  }

  return counter;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 2.4.4 Возвращает строку, в которой в верхнем регистре все нечетные буквы
 * @param str string
 * @return string
 */
export function capitalizeOddLetters(str: string): string {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    newStr += isEvenNumber(i + 1) ? str[i] : str[i].toUpperCase();
  }

  return newStr;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 2.4.5 Возвращает строку, в которой каждое слово начинается с заглавной буквы
 * @param str string
 * @return string
 */
export function capitalizeFirstLetterOfEachWord(str: string): string {
  const elements = str.length ? str.split(' ') : [];

  const newStr = [];
  for (const element of elements) {
    newStr.push(element ? element[0].toUpperCase() + element.slice(1, element.length) : element);
  }

  return newStr.join(' ');
}
