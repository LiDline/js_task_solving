import { isEvenNumber } from '../level_1/level_1_1';

/**
 * 2.5.1 Возвращает массив позиций всех нулей
 * @param str string
 * @return number[]
 */
export function findZeroPositions(str: string): number[] {
  const indexOfZeros = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] == '0') {
      indexOfZeros.push(i);
    }
  }

  return indexOfZeros;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 2.5.2 Принимает строку и возвращает без каждого 3-го символа
 * @param str string
 * @return string
 */

export function removeEveryThirdCharacter(str: string): string {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    newStr += (i + 1) % 3 == 0 ? '' : str[i];
  }

  return newStr;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 2.5.3 Принимает массив чисел и возвращает отношение суммы элементов на четных позициях к сумме элементов на нечетных позициях
 * @param str number[]
 * @return number
 */
export function ratioOfEvenOddIndexSum(nums: number[]): number {
  let evenSum = 0;
  let notEvenSum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (isEvenNumber(i)) {
      evenSum += nums[i];
    } else {
      notEvenSum += nums[i];
    }
  }

  return evenSum / notEvenSum;
}
