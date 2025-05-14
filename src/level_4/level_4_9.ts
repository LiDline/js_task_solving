import { randomInt } from 'node:crypto';
import { ONE_DAY_IN_MS } from '../additional/CONST';
import Timestamp from '../additional/Timestamp';
import { getRemainder } from '../level_1/level_1_5';
import { isLeapYear } from './level_4_2';
import { getDivisors } from '../level_3/level_3_7';

/**
 * 4.9.1 Сделайте функцию, которая будет возвращать
 * сколько дней осталось до ближайшего 29 февраля.
 * @param now - Дата. По умолчанию new Date()
 * @return Возвращает сколько дней осталось до ближайшего 29 февраля
 */
export function daysUntilNextFebruary29(now = new Date()) {
  now.setUTCHours(0, 0, 0);

  let leapYear = now.getFullYear();
  while (true) {
    const isValidLeapYear =
      isLeapYear(leapYear) && now.getTime() <= new Date(`${leapYear}-02-29`).getTime();

    if (isValidLeapYear) break;

    leapYear++;
  }

  const different = new Date(`${leapYear}-02-29`).getTime() - now.getTime();

  const days = different / ONE_DAY_IN_MS;

  return days;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 4.9.2 Сделайте функцию, которая будет возвращать дату следующей масленицы,
 * которая празднуется в последнее воскресенье зимы.
 * Способ расчёта Пасхи взят [тут](https://www.bolshoyvopros.ru/questions/3107921-algoritm-opredelenija-kakogo-prazdnika-razrabotal-gauss.html).
 * @param year - Год. По умолчанию new Date().getFullYear()
 * @return Возвращает дату окончания масленицы (вс)
 */
export function getMaslenitsaDate(year = new Date().getFullYear()) {
  const x = 15;
  const y = 6;

  const a = getRemainder(year, 19);
  const b = getRemainder(year, 4);
  const c = getRemainder(year, 7);

  const d = getRemainder(19 * a + x, 30);

  const sum = 2 * b + 4 * c + 6 * d + y;
  const e = getRemainder(sum, 7);

  let easter: Date;
  switch (true) {
    case d + e - 9 === 26: {
      const dayEaster = 19;
      easter = new Date(`${year}-04-${dayEaster}`);
      break;
    }

    case d + e - 9 === 25: {
      const dayEaster = 18;
      easter = new Date(`${year}-04-${dayEaster}`);
      break;
    }

    // +13 для нового календаря
    case d + e <= 10: {
      const dayEaster = 22 + d + e;
      easter = Timestamp.from(new Date(`${year}-03-${dayEaster}`))
        .plusDays(13)
        .getDate();
      break;
    }

    default: {
      const dayEaster = d + e - 9;
      easter = Timestamp.from(new Date(`${year}-04-${dayEaster}`))
        .plusDays(13)
        .getDate();
      break;
    }
  }

  const theoreticalStartMaslenitsa = Timestamp.from(easter).minusDays(56);
  const nextSunday = 7 - theoreticalStartMaslenitsa.getWeekDay();

  return theoreticalStartMaslenitsa.plusDays(nextSunday).toRusDate();
}

// -----------------------------------------------------------------------------------------------------

/**
 * 4.9.3 Сделайте функцию, которая будет возвращать случайный цвет.
 * @return Возвращает случайный RGB цвет
 */
export function gerRandomRGB() {
  return [randomInt(0, 256), randomInt(0, 256), randomInt(0, 256)];
}

// -----------------------------------------------------------------------------------------------------

/**
 * 4.9.4 Сделайте функцию, которая параметром будет принимать массив чисел
 * и возвращать массив общих делителей всех чисел из переданного массива.
 * @param array - Массив чисел.
 * @return Возвращает массив общих делителей
 */
export function findCommonDivisors(array: number[]) {
  if (!array.length) return;

  const smallestValue = array.sort((a, b) => a - b)[0];
  const divisorsSmallestValue = getDivisors(smallestValue);

  const arrayWithoutSmallest = array.filter((value) => value != smallestValue);
  if (!arrayWithoutSmallest.length) return divisorsSmallestValue;

  const commonDivisors: number[] = [];
  for (const divisor of divisorsSmallestValue) {
    const isDivisors: boolean[] = [];

    for (const value of arrayWithoutSmallest) {
      if (value % divisor == 0) isDivisors.push(true);
    }

    if (isDivisors.length === arrayWithoutSmallest.length) commonDivisors.push(divisor);
  }

  return commonDivisors;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 4.9.5 Сделайте функцию, которая
 * параметром будет принимать двухмерный массив чисел
 * и возвращать массив максимальных чисел в каждом подмассиве.
 * @param array - Двумерный массив чисел.
 * @return Возвращает массив макс. значений каждого подмассива
 */
export function findMaxInSubArrays(array: number[][]) {
  const max: number[] = []
  
  for (const elements of array) {
    const greatestValue = elements.sort((a, b) => b - a)[0];

    greatestValue && max.push(greatestValue);
  }

  return max;
}