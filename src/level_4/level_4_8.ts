import { randomInt } from 'node:crypto';
import { writeFileSync, readFileSync } from 'node:fs';

import { isPrime } from './level_4_4';
import { sumOfObjectOrArray } from '../level_3/level_3_6';

/**
 * 4.8.1 Сделайте функцию, которая параметром будет принимать массив и
 * возвращать случайный элемент этого массива.
 * @param array - Массив случайных элементов
 * @return Возвращает случайный элемент массива
 */
export function getRandomElement(array: (string | number)[]) {
  return array.length && array.length != 1 ? array[randomInt(0, array.length - 1)] : array[0];
}

// -----------------------------------------------------------------------------------------------------

/**
 * 4.8.2 Сделайте функцию, которая параметром будет принимать массив и
 * возвращать массив из N случайных элементов этого массива.
 * @param array - Массив случайных элементов
 * @param N - число случайных элементов
 * @return Возвращает N случайных элементов массива
 */
export function getRandomElements(array: (string | number)[], N: number) {
  const isMoreLengthThanN = array.length > N;
  const newLength = isMoreLengthThanN ? N : array.length;

  const result = Array.from({ length: newLength }, (_, __) => array[randomInt(0, newLength)]);

  return result;
}

// -----------------------------------------------------------------------------------------------------

interface FilesCollection {
  [id: string]: {
    array: (string | number)[];
    lastKey?: string | number;
  };
}

/**
 * 4.8.3 Сделайте функцию, которая параметром будет принимать массив и
 * возвращать случайный элемент этого массива так,
 * чтобы одинаковые элементы не возвращались два раза подряд.
 * @param array - Массив случайных элементов
 * @return Возвращает случайный неповторяющийся элемент массива
 */
export function getRandomElementWithoutConsecutiveDuplicates(array: (string | number)[]) {
  if (!array.length) return;

  const filePath = process.cwd() + '/src/files/level_4_8_3.txt';
  const id = array.join('');

  let file: ArrayBufferLike;

  try {
    file = readFileSync(filePath);
  } catch (error) {
    const initData: FilesCollection = {};
    initData[id] = { array };

    writeFileSync(filePath, JSON.stringify(initData, null, 2));

    file = readFileSync(filePath);
  }

  const stringData = file.toString();
  const data = JSON.parse(stringData) as FilesCollection;

  const isArrayInFileWithLastKey = data[id]?.lastKey;

  let randomElement: string | number;

  if (isArrayInFileWithLastKey) {
    const uniqElements = [...new Set(array)];
    const arrayWithoutLastKey = uniqElements.filter((value) => value != data[id].lastKey);

    randomElement = getRandomElement(arrayWithoutLastKey);
  } else {
    randomElement = getRandomElement(array);

    data[id] = { array };
  }

  data[id].lastKey = randomElement;
  writeFileSync(filePath, JSON.stringify(data, null, 2));

  return randomElement;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 4.8.4 Сделайте функцию, которая будет возвращать массив простых чисел из заданного промежутка.
 * @param [n1, n2] - Промежуток
 * @return Возвращает массив простых чисел из заданного промежутка
 */
export function getPrimesInRange(range: [number, number]) {
  const [start, end] = range;
  const length = end - start + 1;

  const array = Array.from({ length }, (_, k) => start + k);

  return array.filter(isPrime);
}

// -----------------------------------------------------------------------------------------------------

/**
 * 4.8.5 Сделайте функцию, которая параметрами будет принимать любое количество чисел,
 * а возвращать их сумму.
 * @param ...args - Числа
 * @return Возвращает сумму
 */
export function sumNumbers(...numbers: number[]) {
  return sumOfObjectOrArray(numbers);
}

// -----------------------------------------------------------------------------------------------------

/**
 * 4.8.6 Сделайте функцию, которая заполнит массив N
 * случайными числами из заданного промежутка так,
 * чтобы в массиве не было подряд двух одинаковых чисел.
 * @param [n1, n2] - Промежуток
 * @param N - число случайных элементов
 * @return Возвращает массив случайных элементов
 */
export function fillArrayWithUniqueConsecutiveNumbers(range: [number, number], N: number) {
  const [start, end] = range;

  const array = Array.from({ length: end - start + 1 }, (_, k) => start + k);

  const newArray: number[] = [];
  for (let i = 0; i < N; i++) {
    if (array[i - 1]) {
      const arrayWithoutLastKey = array.filter((value) => value != array[i - 1]);

      const randomElement = getRandomElement(arrayWithoutLastKey) as number;
      newArray.push(randomElement);

      continue;
    }

    const randomElement = getRandomElement(array) as number;
    newArray.push(randomElement);
  }

  return newArray;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 4.8.7 Сделайте функцию, которая заполнит массив N случайными числами
 * из заданного промежутка так, чтобы числа не повторялись.
 * @param [n1, n2] - Промежуток
 * @param N - число случайных элементов
 * @return Возвращает массив уникальных случайных элементов
 */
export function fillArrayWithUniqueRandomNumbers(range: [number, number], N: number) {
  const [start, end] = range;
  const isMoreLengthThanN = end - start + 1 > N;
  const newLength = isMoreLengthThanN ? N : end - start + 1;

  const array = Array.from({ length: newLength }, (_, k) => start + k);

  const newArray: number[] = [];
  for (let i = 0; i < newLength; i++) {
    const arrayWithoutKey = array.filter((value) => !newArray.includes(value));

    const randomElement = getRandomElement(arrayWithoutKey) as number;

    newArray.push(randomElement);
  }

  return newArray;
}
