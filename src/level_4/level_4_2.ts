import { LANG_DICTIONARY, ONE_DAY_IN_MS } from '../additional/CONST';
import Timestamp from '../additional/Timestamp';
import { getStrFromNumWithoutMinusAndComa, getSumFromArray } from '../additional/utils';
import { getDayOfWeek } from './level_4_1';

/**
 * 4.2.1 Возвращает сумму цифр
 * @param num number
 * @return number
 */
export function sumOfDigits(num: number) {
  const digits = getStrFromNumWithoutMinusAndComa(num).split('').map(Number);

  return getSumFromArray(digits);
}

// -----------------------------------------------------------------------------------------------------

/**
 * 4.2.2 Возвращает число без нулей
 * @param num number
 * @return number
 */
export function removeZeros(num: number) {
  const numInStr = String(num).replace(/0/g, '');

  return numInStr.length ? +numInStr : 0;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 4.2.3 Возвращает разницу дат в днях
 * @param dateOne Date
 * @param dateTwo Date
 * @return number
 */
export function daysUntilOrSince(dateOne: Date, dateTwo: Date) {
  const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;

  const different = Math.abs(dateOne.getTime() - dateTwo.getTime());

  return +(different / ONE_DAY_IN_MS).toFixed(0);
}

// -----------------------------------------------------------------------------------------------------

/**
 * 4.2.4 Возвращает високосный ли год
 * @param year number
 * @return number
 */
export function isLeapYear(year: number) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 4.2.5 Возвращает список високосных годов за предыдущие сто лет
 * @param year number
 * @return number
 */
export function getLeapYears(year: number) {
  const leapYears: number[] = [];

  for (let i = 1; i <= 100; i++) {
    if (year - i < 0) break;

    const leapYear = isLeapYear(year - i);

    if (leapYear) leapYears.push(year - i);
  }

  return leapYears;
}

// -----------------------------------------------------------------------------------------------------

/**
 * 4.2.6 Возвращает кол-во дней до конца месяца
 * @param date Date
 * @return number
 */
export function daysUntilEndOfMonth(date: Date) {
  const startNextMonth = new Date(date).setMonth(date.getMonth() + 1, 1);
  const endMonth = startNextMonth - ONE_DAY_IN_MS;

  const different = endMonth - date.getTime();

  return +(different / ONE_DAY_IN_MS).toFixed(0);
}

// -----------------------------------------------------------------------------------------------------

/**
 * 4.2.7 Возвращает предыдущий, текущий и следующий дни недели словом
 * @param date Date
 * @return obj
 */
export function getWeekdayNames(date: Date) {
  return {
    next: LANG_DICTIONARY[getDayOfWeek(Timestamp.from(date).plusDays().getDate())],
    curr: LANG_DICTIONARY[getDayOfWeek(date)],
    prev: LANG_DICTIONARY[getDayOfWeek(Timestamp.from(date).minusDays().getDate())],
  };
}
