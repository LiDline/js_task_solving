import simpleTest from '../additional/simpleTest';
import { addTenPercentToNumbers, getHtmlString, getHttpLinks } from './level_1_9';

describe('Уровень 1.9', () => {
  describe('1.9.1 Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.', () => {
    const testCases = [
      { input: ['мышь'], expected: [] },
      { input: ['мышь', 'http://gagaga.com'], expected: ['http://gagaga.com'] },
      {
        input: ['http://example.com', 'https://secure.com', 'http://test.org'],
        expected: ['http://example.com', 'http://test.org'],
      },
      { input: ['https://secure.com', 'ftp://file.com'], expected: [] },
      { input: ['http://mysite.com', 'http://another.com'], expected: ['http://mysite.com', 'http://another.com'] },
      {
        input: ['http://short', 'http://verylongsite.com/path'],
        expected: ['http://short', 'http://verylongsite.com/path'],
      },
      { input: [], expected: [] },
    ];

    simpleTest(testCases, getHttpLinks);
  });

  describe('1.9.2 Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.', () => {
    const testCases = [
      { input: ['мышь'], expected: [] },
      { input: ['мышь', 'html'], expected: [] },
      { input: ['index.html', 'page.php', 'about.html'], expected: ['index.html', 'about.html'] },
      { input: ['index.html', 'about.HTML'], expected: ['index.html'] }, // проверка регистра
      { input: ['http://site.com/home.html', 'http://site.com/page.php'], expected: ['http://site.com/home.html'] },
      { input: ['noextension', 'contact.html', 'section.html'], expected: ['contact.html', 'section.html'] },
      { input: [], expected: [] },
    ];

    simpleTest(testCases, getHtmlString);
  });

  describe('1.9.3 Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.', () => {
    const testCases = [
      { input: [1], expected: [1.1] },
      { input: [-1], expected: [-0.9] },
      { input: [10, 20, 30], expected: [11, 22, 33] },
      { input: [-10], expected: [-9] },
      { input: [100, -50, 25], expected: [110, -45, 27.5] },
      { input: [5.5, 15.2], expected: [6.05, 16.72] },
    ];

    simpleTest(testCases, addTenPercentToNumbers);
  });
});
