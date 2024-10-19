/**
 * 1.10.1 Возвращает массив случайных чисел из промежутка от 1 до 100.
 * @return number[]
 */
export function getRandomNumbersArray() {
  const array = Array.from({ length: 100 }, (_, _n) => Math.floor(Math.random() * 100));

  return array;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 1.10.2 Дано некоторое число. Выведите в консоль все его символы с конца - клон 1.5.5 или 1.7.3
 */

// -----------------------------------------------------------------------------------------------------

/**
 * 1.10.3 Возвращает матрицу 2 на n элементов входящего массива
 * @param array number[]
 * @return [number, number][]
 */
export function toMatrix2xN(array: number[]) {
  const res: [number, number][] = [];

  for (let i = 0; i < array.length; i += 2) {
    res.push([array[i], array[i + 1] !== undefined ? array[i + 1] : 0]);
  }

  return res;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 1.10.4 Возвращает одноразмерный массив
 * @param ...arrays number[][]
 * @return number[]
 */
export function mergeArrays(...arrays: number[][]): number[] {
  const res = arrays.flat(Infinity) as number[];

  return res;
}

// -----------------------------------------------------------------------------------------------------
