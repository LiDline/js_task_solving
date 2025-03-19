import { getStringFromNum, getSumFromArray } from '../additional/utils';
import { isEvenNumber } from '../level_1/level_1_1';

/**
 * 3.2.1 Возвращает все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная
 * @return number[]
 */
export function numbersWithEvenPenultimateDigit() {
  const array = Array.from({ length: 991 }, (_, i) => {
    const element = i + 10;

    const elementInStr = getStringFromNum(element);

    const penultimateDigit = Number(elementInStr[elementInStr.length - 2]);

    if (isEvenNumber(penultimateDigit)) {
      return element;
    }
  }).filter((element) => element !== undefined);

  return array;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 3.1.2 Возвращает массив без каждого 5-го элемента
 * @param array unknown[]
 * @return any[]
 */
export function removeEveryFifthElement(array: unknown[]) {
  const badArray: any[] = [];

  for (let i = 4; i < array.length; i += 5) {
    badArray.push(array[i]);
  }

  const newArray = array.filter((value) => !badArray.includes(value));

  return newArray;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 3.1.3 Возвращает строку, содержащую столько нулей, сколько указано в переменной
 * @param num number
 * @return string
 */
export function createZeroString(num: number) {
  return Array.from({ length: num }, () => '0').join('');
}

// -----------------------------------------------------------------------------------------------------

/**
 * 3.1.4 Возвращает строку, в которой удалено каждое второе слово
 * @param str string
 * @return string
 */
export function removeEverySecondWord(str: string) {
  const array = str.split(' ');

  return array.filter((_, i) => isEvenNumber(i) || i === 0).join(' ');
}

// -----------------------------------------------------------------------------------------------------

/**
 * 3.1.5 Возвращает сумму элементов массива
 * @param array number[][]
 * @return string
 */
export function sumOfElements(array: number[][]) {
  return array.reduce((sum, current) => (sum += getSumFromArray(current)), 0);
}
