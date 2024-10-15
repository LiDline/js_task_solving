/**
 * 1.6.1 Возвращает сумму квадратов элементов массива.
 * @param nums number[]
 * @return number
 */
export function getSumOfSquares(nums: number[]) {
  const sum = nums.reduce((sum, current) => sum + current ** 2, 0);

  return sum;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 1.6.2 Возвращает сумму квадратных корней целочисленных элементов массива.
 * @param nums number[]
 * @return number
 */
export function getSumOfSquareRoots(nums: number[]) {
  const sum = nums.reduce(
    (sum, current) => (current >= 0 ? sum + current ** 0.5 : sum),
    0,
  );

  return sum;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 1.6.3 Возвращает сумму положительных элементов массива.
 * @param nums number[]
 * @return number
 */
export function getSumOfPositive(nums: number[]) {
  const sum = nums.reduce(
    (sum, current) => (current >= 0 ? sum + current : sum),
    0,
  );

  return sum;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 1.6.4 Возвращает сумму тех элементов этого массива, которые больше нуля и меньше десяти.
 * @param nums number[]
 * @return number
 */
export function getSumOfElementsBetweenZeroAndTen(nums: number[]) {
  const sum = nums.reduce(
    (sum, current) => (current > 0 && current < 10 ? sum + current : sum),
    0,
  );

  return sum;
}

// -----------------------------------------------------------------------------------------------------
