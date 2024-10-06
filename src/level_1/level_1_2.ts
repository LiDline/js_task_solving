import { getStringFromNum } from "../additional/utils";

/**
 * 1.2.1 Возвращает первую цифру числа
 * @param num number
 * @return number
 */
export function getFirstDigit(num: number) {
  return Number(getStringFromNum(num)[0]);
}

// -----------------------------------------------------------------------------------------------------

/**
 * 1.2.2 Возвращает последнюю цифру числа
 * @param num number
 * @return number
 */
export function getLastDigit(num: number) {
  const strNum = getStringFromNum(num);

  return Number(`${strNum}`[strNum.length - 1]);
}

// -----------------------------------------------------------------------------------------------------

/**
 * 1.2.3 Возвращает сумму последней и первой цифры числа
 * @param num number
 * @return number
 */
export function calcSumFirstAndLastDigit(num: number) {
  if (getStringFromNum(num).length == 1) {
    return Math.abs(num)
  }

  return getFirstDigit(num) + getLastDigit(num);
}

// -----------------------------------------------------------------------------------------------------


