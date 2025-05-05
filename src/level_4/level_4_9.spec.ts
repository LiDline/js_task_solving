import simpleTest from '../additional/simpleTest';
import { daysUntilNextFebruary29 } from './level_4_9';

describe('Уровень 4.9', () => {
  describe('4.9.1. Сделайте функцию, которая будет возвращать сколько дней осталось до ближайшего 29 февраля.', () => {
    const testCases = [
      {
        input: new Date('2023-10-05'), // Текущая дата в октябре 2023 года
        expected: 147, // До 29 февраля 2024 года
      },
      {
        input: new Date('2024-02-27'), // 28 февраля 2024 года (високосный год)
        expected: 2, // До 29 февраля 2024 года
      },
      {
        input: new Date('2024-02-29'), // 29 февраля 2024 года
        expected: 0,
      },
      {
        input: new Date('2032-02-29'), // 29 февраля 2032 года (високосный год)
        expected: 0, // До 29 февраля 2036 года
      },
      {
        input: new Date('2036-03-01'), //
        expected: 1460, // До 29 февраля 2040 года
      },
      {
        input: new Date('2100-01-01'),
        expected: 1519,
      },
    ];

    simpleTest(testCases, daysUntilNextFebruary29);
  });
});
