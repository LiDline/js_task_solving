import { getStringFromNum } from '../additional/utils';
import { isEvenNumber } from '../level_1/level_1_1';

/**
 * 3.4.1 Возвращает массив, в котором все числа в промежутке от 10 до 1000, у которых первая цифра четная
 * @return number[]
 */
export function printNumbersWithEvenFirstDigit() {
  const array = Array.from({ length: 991 }, (_, i) => {
    const element = i + 10;

    const elementInStr = getStringFromNum(element);

    const firstDigit = Number(elementInStr[0]);

    if (isEvenNumber(firstDigit)) {
      return element;
    }
  }).filter((element) => element !== undefined);

  return array;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 3.4.2 Возвращает массив, в котором поменяны местами пары элементов этого массива
 * @param array number[]
 * @return number[]
 */
export function swapAdjacentPairs(array: number[]) {
  const newArray: number[] = [];

  for (let i = 0; i < array.length; i += 2) {
    const firstElement = array[i + 1] ? [array[i + 1]] : [];
    const secondElement = array[i] ? [array[i]] : [];

    newArray.push(...firstElement, ...secondElement);
  }

  return newArray;
}

// -----------------------------------------------------------------------------------------------------
/**
 * 3.4.3 Возвращает сумму подэлементов объекта
 * @param array object
 * @return number
 */
export function sumOfObject(obj: object) {
  const array = Object.values(obj);

  const result = array.reduce((sum, current) => {
    if (typeof current === 'number') {
      return (sum += current);
    }

    return sum + sumOfObject(current);
  }, 0);

  return result;
}
