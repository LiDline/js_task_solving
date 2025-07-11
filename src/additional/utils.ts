export function getStringFromNum(num: number) {
  return `${Math.abs(num)}`;
}

export function getSumFromArray(arr: number[]) {
  return arr.reduce((sum, current) => (sum += current), 0);
}

export function isNumber(symbol: unknown) {
  return !isNaN(Number(symbol));
}

export function getStrFromNumWithoutMinusAndComa(num: number) {
  return String(getStringFromNum(num)).replace('.', '');
}

export function removeEmptyValues<T>(array: T[]) {
  return array.filter((value) => !!value && value != 0);
}
