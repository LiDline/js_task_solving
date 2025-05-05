import { ONE_DAY_IN_MS } from '../additional/CONST';
import { isLeapYear } from './level_4_2';

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
