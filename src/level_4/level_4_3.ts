/**
 * 4.3.1 Возвращает массив без дублей
 * @param array unknown[]
 * @return unknown[]
 */
export function removeDuplicates(array: unknown[]) {
  const set = new Set(array);

  return Array.from(set);
}

// -----------------------------------------------------------------------------------------------------

/**
 * 4.3.2 Возвращает массив без дублей, встречающихся более 3-х раз
 * @param array (string | number)[]
 * @return (string | number)[]
 */
export function removeExcessDuplicates(array: (string | number)[]) {
  const map = new Map<string | number, { positions: number[]; count: number }>();

  for (let i = 0; i < array.length; i++) {
    const element = map.get(array[i]);

    if (element) {
      map.set(array[i], { positions: [...element.positions, i], count: element.count + 1 });
    } else {
      map.set(array[i], { positions: [i], count: 1 });
    }
  }

  const customArray = Array.from(map.entries());
  const withoutDuplicates = customArray.filter((value) => value[1].count <= 3);

  const newArray: (string | number)[] = [];

  for (const element of withoutDuplicates) {
    const positions = element[1].positions;
    const value = element[0];

    for (let i = 0; i < positions.length; i++) {
      newArray[positions[i]] = value;
    }
  }

  return newArray.filter((value) => typeof value != 'undefined');
}

// -----------------------------------------------------------------------------------------------------

/**
 * 4.3.3 Возвращает массив, в котором удалены одинаковые рядом стоящие элементы
 * @param array (string | number)[]
 * @return (string | number)[]
 */
export function removeAdjacentDuplicates(array: (string | number)[]) {
  const needDeleteSet = new Set<number>();

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (array[i - 1] && array[i - 1] == element) {
      needDeleteSet.add(i - 1);
      needDeleteSet.add(i);
    }

    if (array[i + 1] && array[i + 1] == element) {
      needDeleteSet.add(i + 1);
      needDeleteSet.add(i);
    }
  }

  return array.filter((_, i) => !needDeleteSet.has(i));
}

// -----------------------------------------------------------------------------------------------------

/**
 * 4.3.4 Возвращает max\min массива
 * @param array number[]
 * @return object
 */
export function findMinMax(array: number[]) {
  const sorted = array.sort((a, b) => a - b);

  return {
    max: sorted[array.length - 1],
    min: sorted[0],
  };
}
