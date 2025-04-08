import { getSumFromArray } from '../additional/utils';
import { isEvenNumber } from '../level_1/level_1_1';

/**
 * 3.9.1 Проверяет, что строка состоит только из цифр
 * @param str string
 * @return string
 */
export function isDigitsOnly(str: string) {
  return /^\d+$/g.test(str);
}

// -----------------------------------------------------------------------------------------------------

/**
 * 3.9.2 Проверяет, что строка состоит только из чётных цифр
 * @param str string
 * @return string
 */
export function isEvenDigitsOnly(str: string) {
  const digits = str.split('').filter((element) => /\d/.test(element));

  return !!digits.length && digits.every((digit) => isEvenNumber(+digit));
}

// -----------------------------------------------------------------------------------------------------

/**
 * 3.9.3 Возвращает массив, в котором нет чисел, имеющих два и более нуля
 * @param array number[]
 * @return number[]
 */
export function removeNumbersWithMultipleZeros(array: number[]) {
  //   return array.filter((value) => !String(value).match(/0.*0/g));

  return array.filter((value) => String(value).split('0').length - 1 < 2);
}

// -----------------------------------------------------------------------------------------------------

/**
 * 3.9.4 Возвращает массив, в котором все числа от 1 до 1000 имеют сумму цифр = 13
 * @return number[]
 */
export function findNumbersWithDigitSum13() {
  const array: number[] = [];

  for (let i = 1; i <= 1000; i++) {
    const digits = String(i).split('').map(Number);

    if (getSumFromArray(digits) === 13) {
      array.push(i);
    }
  }

  return array;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 3.9.5 Возвращает массив особый массив
 * @return number[][]
 */
export function createSequentialArray() {
  let counter = 1;
  const newArray: number[][] = [];

  for (let i1 = 1; i1 <= 3; i1++) {
    const middleArray: number[] = [];

    for (let i2 = 1; i2 <= 3; i2++) {
      middleArray.push(counter);

      counter++;
    }

    newArray.push(middleArray);
  }

  return newArray;
}
