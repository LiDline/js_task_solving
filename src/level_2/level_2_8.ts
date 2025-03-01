/**
 * 2.8.1 Принимает строку с буквами. Возвращает, что в этой строке не более двух заглавных букв
 * @param str string
 * @return boolean
 */
export function hasAtMostTwoUppercase(str: string) {
  const reg = /[A-Z]/g;

  const matches = str.match(reg);

  return matches && matches.length <= 2;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 2.8.2 Возвращает строку, в которой удалены все подстроки, в которых количество символов больше трех
 * @param str string
 * @return string
 */
export function removeLongSubstrings(str: string) {
  const newArr: string[] = [];

  for (const element of str.split(' ')) {
    if (element.length <= 3) {
      newArr.push(element);
    }
  }

  return newArr.join(' ');
}

// -----------------------------------------------------------------------------------------------------

/**
 * 2.8.3 Даны два массива. Возвращает слитый в 1 массив особым способом
 * @param arrayOne unknown[]
 * @param arrayTwo unknown[]
 * @return unknown[]
 */
export function customMergeArrays(arrayOne: unknown[], arrayTwo: unknown[]) {
  const nerArray = [];

  nerArray.push(...arrayOne.slice(0, 2), ...arrayTwo, ...arrayOne.slice(2));

  return nerArray;
}
