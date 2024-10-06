/**
 * 1.2.1 Возвращает первую цифру числа
 * @param num number
 * @return number
 */
export function getFirstDigit(num: number) {
    return Number(`${Math.abs(num)}`[0]);
  }

// -----------------------------------------------------------------------------------------------------

/**
 * 1.2.2 Возвращает последнюю цифру числа
 * @param num number
 * @return number
 */
export function getLastDigit(num: number) {
  const strNum = `${Math.abs(num)}`
  return Number(`${strNum}`[strNum.length - 1]);
}

// -----------------------------------------------------------------------------------------------------