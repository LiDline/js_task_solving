/**
 * 1.9.1 Возвращает массив строк, которые начинаются на http://
 * @param array string[]
 * @return string[]
 */
export function getHttpLinks(array: string[]) {
  const regex = RegExp('^http://');

  return array.filter((str) => regex.test(str));
}

// -----------------------------------------------------------------------------------------------------

/**
 * 1.9.2 Возвращает массив строк, которые заканчиваются на .html
 * @param array string[]
 * @return string[]
 */
export function getHtmlString(array: string[]) {
  const regex = /\.html$/;

  return array.filter((str) => regex.test(str));
}

// -----------------------------------------------------------------------------------------------------

/**
 * 1.9.3 Возвращает массив чисел, увеличенных на 10%
 * @param array number[]
 * @return number[]
 */
export function addTenPercentToNumbers(array: number[]) {
  return array.map((n) => n + Math.abs(n / 10));
}

// -----------------------------------------------------------------------------------------------------
