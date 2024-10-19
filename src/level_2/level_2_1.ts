import { getStringFromNum } from '../additional/utils';

/**
 * 2.1.1 Возвращает позицию первого нуля в строке
 * @param str string
 * @return number
 */
export function getFirstZeroPosition(str: string) {
  const index = str.indexOf('0');

  return index;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 2.1.2 Возвращает все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти
 * @return number[]
 */
export function getNumbersWithDigitSumEqualToFive() {
  const array: number[] = [];

  for (let i = 14; i <= 600; i++) {
    if (Number(getStringFromNum(i)[0]) + Number(getStringFromNum(i)[1]) == 5) {
      array.push(i);
    }
  }

  return array;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 2.1.3  Удаляет из массива элементы с заданным значением
 * @param array number[]
 * @param needDelete number
 * @return number[]
 */
export function removeElementsByValue(array: number[], needDelete: number) {
  return array.filter((value) => value != needDelete);
}

// -----------------------------------------------------------------------------------------------------

/**
 * 2.1.4 Возвращает сумму первой половины элементов массива
 * @param array number[]
 * @return number
 */
export function getSumOfFirstHalf(array: number[]) {
  let sum = 0;

  for (let i = 0; i < array.length / 2; i++) {
    sum += array[i];
  }

  return sum;
}

// -----------------------------------------------------------------------------------------------------
