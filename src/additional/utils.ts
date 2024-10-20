export function getStringFromNum(num: number) {
  return `${Math.abs(num)}`;
}

export function getSumFromArray(arr: number[]) {
  return arr.reduce((sum, current) => (sum += current), 0);
}
