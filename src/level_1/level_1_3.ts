/**
 * 1.3.1 Возвращает предпоследний символ строки, если её длина > 1
 * @param str string
 * @return string
 */
export function getPenultSymbol(str: string) {
  return str.length > 1 ? str[str.length - 2] : str;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 1.3.2 Возвращает true, если 1-ое число без остатка делится на 2-ое
 * @param numerator number
 * @param denominator number
 * @return boolean
 */
export function isDenominator(numerator: number, denominator: number) {
  return !!(numerator % denominator == 0);
}

// -----------------------------------------------------------------------------------------------------
