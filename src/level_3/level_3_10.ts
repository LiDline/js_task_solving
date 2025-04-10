import { getStrFromNumWithoutMinusAndComa } from '../additional/utils';

/**
 * 3.10.1 Возвращает массив, в котором каждый элемент повторился 2 раза
 * @param array any[]
 * @return any[]
 */
export function duplicateElements(array: any[]) {
  const set = new Set(array);

  const newArray: any[] = [];

  for (const element of set) {
    newArray.push(element, element);
  }

  return newArray;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 3.10.2 Возвращает массив, в котором те числа, которые являются делителями заданного числа
 * @param array number[]
 * @param value number
 * @return number[]
 */
export function filterDivisors(array: number[], value: number) {
  return array.filter((divisor) => value % divisor === 0);
}

// -----------------------------------------------------------------------------------------------------

/**
 * 3.10.3 Возвращает массив цифр, которые есть и в одном, и во втором числе
 * @param firstNumber number
 * @param secondNumber number
 * @return number[]
 */
export function commonDigits(firstNumber: number, secondNumber: number) {
  const firstSet = new Set(getStrFromNumWithoutMinusAndComa(firstNumber).split('').map(Number));
  const secondSet = new Set(getStrFromNumWithoutMinusAndComa(secondNumber).split('').map(Number));

  return Array.from(firstSet).filter((value) => secondSet.has(value));
}

// -----------------------------------------------------------------------------------------------------

/**
 * 3.10.4 Возвращает массив позиций всех цифр 3, за исключением первой и последней
 * @param num number
 * @return number[]
 */
export function positionsOfThreesExceptFirstAndLast(num: number) {
  const array: number[] = [];
  const str = String(num);

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '3') {
      array.push(i);
    }
  }

  return array.length <= 2 ? [] : array.slice(1, array.length - 1);
}

// -----------------------------------------------------------------------------------------------------

/**
 * 3.10.5 Возвращает массив с числами, состоящих из разных цифр
 * @param array number[]
 * @return number[]
 */
export function filterUniqueDigitNumbers(array: number[]) {
  const result = array.filter((element) => {
    const numInStr = getStrFromNumWithoutMinusAndComa(element);
    const set = new Set(numInStr);

    return Array.from(set).length == numInStr.length;
  });

  return result;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 3.10.6 Возвращает массив со слитыми вместе подмассивами
 * @param array any[]
 * @return number[]
 */
export function flattenArray(array: any[]) {
  if (!Array.isArray(array[0])) return array;

  const newArray: any[] = [];

  array.map((element) => {
    const forPush = !Array.isArray(element[0]) ? element : flattenArray(element);

    newArray.push(...forPush);
  });

  return newArray;
}
