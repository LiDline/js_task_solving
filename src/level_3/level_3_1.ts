import { getStrFromNumWithoutMinusAndComa } from '../additional/utils';

/**
 * 3.1.1 Принимает число. Возвращает, что цифры этого числа расположены по возрастанию
 * @param num number
 * @return boolean
 */
export function isDigitsAscending(num: number) {
  const numInString = getStrFromNumWithoutMinusAndComa(num);

  let previousElement;

  for (const element of numInString) {
    if (previousElement && previousElement >= Number(element)) {
      return false;
    }

    previousElement = Number(element);
  }

  return true;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 3.1.2 Возвращает массив без пустых строк
 * @param array unknown[]
 * @return any[]
 */
export function removeEmptyStrings(array: unknown[]) {
  const newArray: unknown[] = [];

  for (const element of array) {
    if (typeof element === 'string' && !element) continue;

    newArray.push(element);
  }

  return newArray;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 3.1.3 Даны массив. Возвращает отсортированные подмассивы
 * @param array number[][]
 * @return number[][]
 */
export function sortSubArrays(arrays: number[][]) {
  const newArrays: number[][] = [];

  for (const subArray of arrays) {
    newArrays.push(subArray.sort((a, b) => a - b));
  }

  return newArrays;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 3.1.4 Даны два массива. Возвращает наибольший массив с удалёнными с конца элементами
 * @param arrayOne unknown[]
 * @param arrayTwo unknown[]
 * @return any[]
 */
export function equalizeArrayLengths(arrayOne: unknown[], arrayTwo: unknown[]) {
  if (arrayOne.length > arrayTwo.length) {
    return arrayOne.slice(0, arrayTwo.length);
  } else {
    return arrayTwo.slice(0, arrayOne.length);
  }
}
