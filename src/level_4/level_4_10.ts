import { randomInt } from 'node:crypto';
import { removeEmptyValues } from '../additional/utils';
import { getDivisors } from '../level_3/level_3_7';
import { isPrime } from './level_4_4';

/**
 * 4.10.1 Сделайте функцию,
 * которая параметром будет принимать букву и проверять,
 * это буква кириллицы или латиницы.
 * @param letter - Буква.
 * @return Возвращает является ли буква кириллицей или латиницей.
 */
export function checkAlphabet(str: string) {
  const letter = str.length > 1 ? str[0] : str;

  switch (true) {
    case /[a-zA-z]/.test(letter):
      return 'Latin';

    case /[а-яА-Я]/.test(letter):
      return 'Cyrillic';

    default:
      return;
  }
}

// -----------------------------------------------------------------------------------------------------

/**
 * 4.10.2 Сделайте функцию, которая параметром
 * будет принимать массив и перемешивать элементы этого массива в случайном порядке.
 * @param array - Массив элементов.
 * @return Возвращает перемешанный массив элементов.
 */
export function shuffleArray(array: (string | number)[]) {
  const newArray: (string | number)[] = [];
  const usedIds = new Set<number>();

  while (usedIds.size != array.length) {
    const id = randomInt(0, array.length);

    if (!usedIds.has(id)) {
      newArray.push(array[id]);
      usedIds.add(id);
    }
  }

  return newArray;
}

// -----------------------------------------------------------------------------------------------------

interface LettersObject {
  [key: string]: string[];
}

/**
 * 4.10.3 Дан текст со словами.
 * Запишите все слова этого текста в специальный объект.
 * Ключами в этом объекте будут буквы, а значениями - массивы слов, начинающихся на эти буквы.
 * @param str - Набор слов.
 * @return Возвращает объект, где буквы - ключи, а ключи - слова на которые они начинаются.
 */
export function groupWordsByFirstLetter(str: string) {
  const clearStrArray = removeEmptyValues(str.split(' ').map((value) => value.trim()));
  const filteredArray = clearStrArray.filter((value) => value[0].match(/[a-zA-Z]/));

  const firstLetters = new Set(filteredArray.map((value) => value[0].toLowerCase()));

  const objLetters: LettersObject = {};
  firstLetters.forEach((letter) => {
    objLetters[letter] = filteredArray.filter((word) => word[0].toLowerCase() == letter);
  });

  return objLetters;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 4.10.4 Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей, являющихся простыми числами.
 * @param num - Число.
 * @return Возвращает массив простых делителей.
 */
export function getPrimeDivisors(num: number) {
  const divisors: number[] = getDivisors(num);

  return divisors.filter(isPrime);
}

// -----------------------------------------------------------------------------------------------------

/**
 * 4.10.5 Сделайте функцию,
 * которая параметром будет принимать слово и возвращать массив его слогов.
 * @param str - Слово на кириллице.
 * @return Возвращает массив массив его слогов.
 */
export function splitIntoSyllables(word: string) {
  const cleanedWord = word.replace(/[^а-яё]/gi, '').toLowerCase();
  const matches = cleanedWord.match(/[аяоёеуюыиэю]/g);

  if (!matches) return [];

}
