import { isEvenNumber } from '../level_1/level_1_1';

/**
 * 3.8.1 Проверяет, что все числа из массива содержат в себе цифру 3
 * @param array number[]
 * @return boolean
 */
export function allNumbersContainThree(array: number[]) {
  return array.every((value) => String(value).includes('3'));
}

// -----------------------------------------------------------------------------------------------------

/**
 * 3.8.2 Возвращает строку в snake_case
 * @param str string
 * @return string
 */
export function toSnakeCaseFromKebab(str: string) {
  return str.replace(/-/g, '_');
}

// -----------------------------------------------------------------------------------------------------

/**
 * 3.8.3 Возвращает строку из snake_case в camelCase
 * @param str string
 * @return string
 */
export function snakeCaseToCamelCase(str: string) {
  const array = str.split('_');
  const newArray: string[] = [];

  array.map((element, i) => {
    if (i != 0) newArray.push(element[0].toUpperCase() + element.slice(1));
    else newArray.push(element);
  });

  return newArray.join('');
}

// -----------------------------------------------------------------------------------------------------

/**
 * 3.8.4 Возвращает строку из camelCase в snake_case (eng)
 * @param str string
 * @return string
 */
export function camelCaseToSnakeCase(str: string) {
  let newStr: string = '';

  for (let i = 0; i < str.length; i++) {
    if (/[A-Z]/.test(str[i]) && i != 0) {
      newStr += '_';
    }

    newStr += str[i].toLowerCase();
  }

  return newStr;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 3.8.5 Возвращает с помощью циклов массив
 * @return number[][]
 */
export function createRepeatedArray() {
  const array: number[][] = [];

  for (let i = 1; i <= 5; i++) {
    const middleArray: number[] = [];

    for (let i = 1; i <= 3; i++) {
      middleArray.push(i);
    }

    array.push(middleArray);
  }

  return array;
}
