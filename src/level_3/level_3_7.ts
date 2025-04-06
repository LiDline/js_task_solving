import { getStringFromNum } from '../additional/utils';

/**
 * 3.7.1 Возвращает строку в алфавитном порядке
 * @param str string
 * @return string
 */
export function sortWordsAlphabetically(str: string) {
  const array = str.split(' ');

  return array.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).join(' ');
}

// -----------------------------------------------------------------------------------------------------

/**
 * 3.7.2 Возвращает массив делителей числа
 * @param num number
 * @return number[]
 */
export function getDivisors(num: number) {
  const divisors: number[] = [];

  for (let i = 1; i <= Math.abs(num); i++) {
    if (num % i == 0) {
      divisors.push(i);
    }
  }

  return divisors;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 3.7.3 Возвращает массив общих делителей 2-х чисел
 * @param array number[]
 * @return number[]
 */
export function getDivisorsOfTwoNumbers(array: number[]) {
  const [firstNum, secondNum] = array;
  const divisors: number[] = [];

  const lower = Math.min(firstNum, secondNum);

  for (let i = 1; i <= Math.abs(lower); i++) {
    if (firstNum % i == 0 && secondNum % i == 0) {
      divisors.push(i);
    }
  }

  return divisors;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 3.7.4 Проверяет, что у числа есть только один делитель, кроме него самого и единицы
 * @param num number
 * @return boolean
 */
export function hasOnlyOneNonTrivialDivisor(num: number) {
  let counter: number = 0;

  for (let i = 2; i < Math.abs(num); i++) {
    if (num % i == 0) {
      counter += 1;
    }

    if (counter > 1) return false;
  }

  return counter == 1;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 3.7.5 Возвращает максимальное число из строки
 * @param str string
 * @return number
 */
export function getMaxNumberFromString(str: string) {
  const array = str
    .split(',')
    .map((element) => +element.trim())
    .filter((newStr) => !isNaN(newStr));

  return array.sort((a, b) => b - a)[0];
}

// -----------------------------------------------------------------------------------------------------

/**
 * 3.7.6 Возвращает массив, где после каждого однозначного числа вставлено такое же
 * @param array number[]
 * @return number[]
 */
export function duplicateSingleDigitNumbers(array: number[]) {
  const newArray: number[] = [];

  for (const element of array) {
    if (/^\d$/.test(getStringFromNum(element))) {
      newArray.push(element);
    }

    newArray.push(element);
  }

  return newArray;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 3.7.7 Возвращает строку без гласных букв (eng, ru)
 * @param str string
 * @return string
 */
export function removeVowels(str: string) {
  return str.replace(/[аоуэыияеёюaeiou]/gi, '');
}

// -----------------------------------------------------------------------------------------------------

/**
 * 3.7.8 Возвращает строку, где последняя буква каждого eng слова сделана заглавной
 * @param str string
 * @return string
 */
export function capitalizeLastLetter(str: string) {
  const array = str.split(' ');
  const newArray: string[] = [];

  const regex = /[a-z]/i;

  for (const element of array) {
    const symbols = element.split('');
    const letters = symbols.filter((letter) => regex.test(letter));

    if (!letters.length) {
      newArray.push(element);

      continue;
    }

    const indexOfLastLetter = element.lastIndexOf(letters[letters.length - 1]);

    const newStr =
      element.slice(0, indexOfLastLetter) +
      element[indexOfLastLetter].toUpperCase() +
      element.slice(indexOfLastLetter + 1);

    newArray.push(newStr);
  }

  return newArray.join(' ');
}
