import { getSumFromArray } from '../additional/utils';

/**
 * 2.2.1 Возвращает количество отрицательных чисел в массиве
 * @param array number[]
 * @return number
 */
export function countNegativeNumbers(array: number[]) {
  const count = array.filter((num) => num < 0).length;

  return count;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 2.2.2 Возвращает массив с только положительными числами
 * @param array number[]
 * @return number[]
 */
export function getPositiveNumbers(array: number[]) {
  const res = array.filter((num) => num > 0);

  return res;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 2.2.3 Возвращает строку без предпоследнего элемента
 * @param str string
 * @return string
 */
export function removePenultimateElement(str: string) {
  const res = str
    .split('')
    .filter((_, i) => i != str.length - 2)
    .join('');

  return res;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 2.2.4 Дан некоторый массив. Возвращает результат деления суммы первой половины элементов массива на сумму второй половины элементов
 * @param array number[]
 * @return number
 */
export function divideSumOfHalves(array: number[]) {
  if (!array.length || array.length == 1) {
    return getSumFromArray(array);
  }

  const indexHalf = Math.floor(array.length / 2);

  const firstHalf = array.slice(0, indexHalf);
  const secondHalf = array.slice(indexHalf);

  return getSumFromArray(firstHalf) / getSumFromArray(secondHalf);
}

// -----------------------------------------------------------------------------------------------------
