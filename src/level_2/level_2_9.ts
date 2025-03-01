/**
 * 2.9.1 Возвращает сумму пар цифр числа
 * @param num number
 * @return number
 */
export function sumOfDigitPairs(num: number) {
  const numInStr = String(Math.abs(num)).replace('.', '');
  const newNumInArray = numInStr.split('');

  const arrayForReturn: number[] = [];

  for (let i = 0; i < newNumInArray.length; i += 2) {
    const element = newNumInArray.slice(i, i + 2).join('');
    arrayForReturn.push(Number(element));
  }

  const sum = arrayForReturn.reduce((accum, current) => accum + current);

  return sum;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 2.9.2 Возвращает массив чисел в обратном порядке
 * @param nums number[]
 * @return number[]
 */
export function reverseNumbers(nums: number[]) {
  return nums.reverse();
}
