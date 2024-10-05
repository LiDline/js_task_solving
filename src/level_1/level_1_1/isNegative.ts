// 1.1 Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.

/**
 * 1.1 Проверяет отрицательное ли число
 * @param num number
 * @return boolean
 */
export function isNegative(num: number): boolean {
  return !!(num < 0);
}
