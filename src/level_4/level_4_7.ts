/**
 * 4.7.1 Возвращает строку, в котором слова будут отсортированы в алфавитном порядке
 * Сделано в level_3_7.ts в sortWordsAlphabetically
 */

import { randomInt } from 'node:crypto';

// -----------------------------------------------------------------------------------------------------

interface FindCommonElements {
  arrayOne: (string | number)[];
  arrayTwo: (string | number)[];
}

/**
 * 4.7.2 Сделайте функцию, которая параметром будет принимать два массива и возвращать массив их общих элементов.
 * @param param - Объект, содержащий 2 массива
 * @return Возвращает массив с одинаковыми элементами
 */
export function findCommonElements(param: FindCommonElements) {
  const { arrayOne, arrayTwo } = param;

  const longestArray = arrayOne.length > arrayTwo.length ? arrayOne : arrayTwo;
  const smallerArray = arrayOne.length > arrayTwo.length ? arrayTwo : arrayOne;

  const jointArray = smallerArray.filter((value) => longestArray.includes(value));
  const set = new Set(jointArray);

  return Array.from(set);
}

// -----------------------------------------------------------------------------------------------------

/**
 * 4.7.3 Сделайте функцию, которая будет возвращать случайное число.
 * Функция не должна возвращать одно и тоже число два раза подряд.
 * @return Возвращает случайное число
 */
export function getUniqueRandomNumber() {
  return Math.floor(Math.random() * 1000);
}

// -----------------------------------------------------------------------------------------------------

interface GetNextElement {
  arr: (string | number)[];
  element: string | number;
}

/**
 * 4.7.4 Сделайте функцию, которая параметром будет принимать массив и элемент и возвращать следующий за ним элемент
 * @param param - Объект, содержащий массив и элемент для поиска
 * @return Возвращает следующий элемент
 */
export function getNextElement(param: GetNextElement) {
  const { arr, element } = param;

  const indexElement = arr.indexOf(element);

  if (indexElement == -1) return;

  return arr[indexElement + 1];
}
