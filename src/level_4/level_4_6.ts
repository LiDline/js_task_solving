import { ONE_DAY_IN_SEC } from '../additional/CONST';
import { getDivisors } from '../level_3/level_3_7';

/**
 * 4.6.1 Возвращает валидность даты
 * @param str number
 * @return boolean
 */
export function isValidDate(str: string) {
  const regex = /\d{4}-\d{1,2}-\d{1,2}/;

  return regex.test(str) && !!new Date(str).getTime();
}

// -----------------------------------------------------------------------------------------------------

/**
 * 4.6.2 Сделано в level_4_5.ts в fillRandomLettersArray
 */

// -----------------------------------------------------------------------------------------------------

/**
 * 4.6.3 Возвращает строку в верхнем регистре, состоящую из первых букв слов
 * @param str string
 * @return string
 */
export function getInitials(str: string) {
  const array = str.split(' ');

  const newArray: string[] = [];

  for (const element of array) {
    if (!/[a-zA-z]+/.test(element)) continue;

    newArray.push(element.match(/[a-zA-z]/)![0].toUpperCase());
  }

  return newArray.join('');
}

// -----------------------------------------------------------------------------------------------------

/**
 * 4.6.4 Возвращает массив делителей
 * @param array number[]
 * @return number[][]
 */
export function replaceWithDivisors(array: number[]) {
  const newArray: number[][] = [];

  for (const element of array) {
    const divisors = getDivisors(element);

    newArray.push(divisors);
  }

  return newArray;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 4.6.5 Возвращает кол-во дней
 * @param num - Количество секунд
 * @return Объект с количеством дней, часов, минут и секунд.
 */
export function convertSeconds(num: number) {
  const d = Math.floor(num / ONE_DAY_IN_SEC);
  const h = Math.floor((num - d * ONE_DAY_IN_SEC) / (60 * 60));
  const m = Math.floor((num - d * ONE_DAY_IN_SEC - h * 60 * 60) / 60);
  const s = num - d * ONE_DAY_IN_SEC - h * 60 * 60 - m * 60;

  return {
    d,
    h,
    m,
    s,
  };
}
