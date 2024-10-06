/**
 * 1.1.1 Проверяет отрицательное ли числ
 * @param num number
 * @return boolean
 */
export function isNegative(num: number): boolean {
  return !!(num < 0);
}

// -----------------------------------------------------------------------------------------------------

/**
 * 1.1.2 Возвращает длину строки
 * @param str string
 * @return number
 */
export function lengthStr(str: string) {
  return str.length;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 1.1.3 Возврат последнего символа
 * @param str string
 * @return string
 */
export function lastSymbolOfString(str: string) {
  return str[str.length - 1] ?? '';
}

// -----------------------------------------------------------------------------------------------------

/**
 * 1.1.4 Возвращает чётное ли число
 * @param num number
 * @return boolean
 */
export function isEvenNumber(num: number) {
  return !!(num % 2 === 0);
}

// -----------------------------------------------------------------------------------------------------

/**
 * 1.1.5 Метод для проверки совпадения первых букв
 * @param str1 string
 * @param str2 string
 * @return boolean
 */
export function isFirstLetterMatch(str1: string, str2: string) {
  if (!str1.length || !str2.length) {
    return false;
  }

  return str1[0].toLocaleLowerCase() === str2[0].toLocaleLowerCase();
}

// -----------------------------------------------------------------------------------------------------

/**
 * 1.1.6 Возврат последнего символа. Если 'ь', то предпоследний
 * @param str string
 * @return string
 */
export function customLastSymbolOfString(str: string) {
  const lowerStr = str.toLocaleLowerCase();

  const lastSymbol = lastSymbolOfString(lowerStr);

  return lastSymbol == 'ь'
    ? lastSymbolOfString(lowerStr[lowerStr.length - 2] ?? '')
    : lastSymbol;
}
