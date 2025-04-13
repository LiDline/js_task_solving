import { getSumFromArray } from '../additional/utils';
import { getDivisors } from '../level_3/level_3_7';

/**
 * 4.1.1 Возвращает день недели
 * @param date Date
 * @return string
 */
export function getDayOfWeek(date: Date) {
  const days = {
    1: 'Mon',
    2: 'Tue',
    3: 'Wed',
    4: 'Thu',
    5: 'Fri',
    6: 'Sat',
    0: 'Sun',
  } as const;

  type T = keyof typeof days;

  return days[date.getDay() as T];
}

// -----------------------------------------------------------------------------------------------------

/**
 * 4.1.3 Возвращает кол-во суток из сек
 * @param sec number
 * @return number
 */
export function secondsToDays(sec: number) {
  const oneDay = 24 * 60 * 60;

  return +(sec / oneDay).toFixed(1);
}

// -----------------------------------------------------------------------------------------------------

/**
 * 4.1.4 Обрезает строку до заданной длины
 * @param num number
 * @param str string
 * @return number
 */
export function truncateString(num: number, str: string) {
  return str.slice(0, num);
}

// -----------------------------------------------------------------------------------------------------

/**
 * 4.1.5 Возвращает знак зодиака
 * @param date Date
 * @return string
 */
export function getZodiacSign(date: Date) {
  const zodiac = {
    0: 'Водолей',
    1: 'Рыбы',
    2: 'Овен',
    3: 'Телец',
    4: 'Близнецы',
    5: 'Рак',
    6: 'Лев',
    7: 'Дева',
    8: 'Весы',
    9: 'Скорпион',
    10: 'Стрелец',
    11: 'Козерог',
    12: 'Козерог',
  };

  type T = keyof typeof zodiac;

  const zodiacStartAndEnd = [
    { start: { day: 20, month: 0 }, end: { day: 18, month: 1 } }, // Водолей
    { start: { day: 19, month: 1 }, end: { day: 20, month: 2 } }, // Рыбы
    { start: { day: 21, month: 2 }, end: { day: 19, month: 3 } }, // Овен
    { start: { day: 20, month: 3 }, end: { day: 20, month: 4 } }, // Телец
    { start: { day: 21, month: 4 }, end: { day: 20, month: 5 } }, // Близнецы
    { start: { day: 21, month: 5 }, end: { day: 22, month: 6 } }, // Рак
    { start: { day: 23, month: 6 }, end: { day: 22, month: 7 } }, // Лев
    { start: { day: 23, month: 7 }, end: { day: 22, month: 8 } }, // Дева
    { start: { day: 23, month: 8 }, end: { day: 22, month: 9 } }, // Весы
    { start: { day: 23, month: 9 }, end: { day: 21, month: 10 } }, // Скорпион
    { start: { day: 22, month: 10 }, end: { day: 21, month: 11 } }, // Стрелец
    { start: { day: 22, month: 11 }, end: { day: 31, month: 11 } }, // Козерог
    { start: { day: 1, month: 0 }, end: { day: 19, month: 0 } }, // Козерог
  ];

  const zodiacWithDateInNumber = zodiacStartAndEnd.map((element, i) => {
    const start = new Date(date).setMonth(element.start.month, element.start.day);
    const end = new Date(date).setMonth(element.end.month, element.end.day);

    return {
      start,
      end,
      i: i as T,
    };
  });

  const indexOfZodiac = zodiacWithDateInNumber.findIndex(
    (obj) => date.getTime() >= obj.start && date.getTime() <= obj.end,
  ) as T;

  return zodiac[indexOfZodiac];
}

// -----------------------------------------------------------------------------------------------------

/**
 * 4.1.6 Возвращает сумму делителей числа
 * @param num number
 * @return number
 */
export function sumOfDivisors(num: number) {
  const divisors = getDivisors(num);

  return getSumFromArray(divisors);
}
