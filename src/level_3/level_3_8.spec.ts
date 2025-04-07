import simpleTest from '../additional/simpleTest';
import {
  allNumbersContainThree,
  camelCaseToSnakeCase,
  createRepeatedArray,
  snakeCaseToCamelCase,
  toSnakeCaseFromKebab,
} from './level_3_8';

describe('Уровень 3.8', () => {
  describe('3.8.1 Дан массив со числами. Проверьте, что все числа из этого массива содержат в себе цифру 3.', () => {
    const testCases = [
      {
        input: [13, 23, 33, 43],
        expected: true,
      },
      {
        input: [3, 30, 31, 32],
        expected: true,
      },
      {
        input: [10, 20, 30, 40],
        expected: false,
      },
      {
        input: [33, 34, 35, 36],
        expected: true,
      },
      {
        input: [1, 2, 3, 4, 5],
        expected: false,
      },
      {
        input: [],
        expected: true, // Пустой массив можно считать, что удовлетворяет условию, так как нет чисел, которые бы его нарушали
      },
    ];

    simpleTest(testCases, allNumbersContainThree);
  });

  describe('3.8.2 Дана строка. Преобразуйте ее в формат snake_case', () => {
    const testCases = [
      {
        input: 'kebab-case',
        expected: 'kebab_case',
      },
      {
        input: 'another-example-string',
        expected: 'another_example_string',
      },
      {
        input: 'one-more-test',
        expected: 'one_more_test',
      },
      {
        input: 'single',
        expected: 'single',
      },
      {
        input: 'multiple-words-in-kebab',
        expected: 'multiple_words_in_kebab',
      },
      {
        input: '',
        expected: '',
      },
    ];

    simpleTest(testCases, toSnakeCaseFromKebab);
  });

  describe('3.8.3 Дана строка. Преобразуйте ее в формат camelCase.', () => {
    const testCases = [
      {
        input: 'snake_case',
        expected: 'snakeCase',
      },
      {
        input: 'another_example_string',
        expected: 'anotherExampleString',
      },
      {
        input: 'one_more_test',
        expected: 'oneMoreTest',
      },
      {
        input: 'single',
        expected: 'single',
      },
      {
        input: 'multiple_words_in_snake',
        expected: 'multipleWordsInSnake',
      },
      {
        input: '',
        expected: '',
      },
    ];

    simpleTest(testCases, snakeCaseToCamelCase);
  });

  describe('3.8.4 Дана строка. Преобразуйте ее в формат camelCase.', () => {
    const testCases = [
      {
        input: 'camelCase',
        expected: 'camel_case',
      },
      {
        input: 'anotherExampleString',
        expected: 'another_example_string',
      },
      {
        input: 'oneMoreTest',
        expected: 'one_more_test',
      },
      {
        input: 'single',
        expected: 'single',
      },
      {
        input: 'multipleWordsInCamel',
        expected: 'multiple_words_in_camel',
      },
      {
        input: 'HTMLParser',
        expected: 'h_t_m_l_parser',
      },
      {
        input: '',
        expected: '',
      },
    ];

    simpleTest(testCases, camelCaseToSnakeCase);
  });

  describe('3.8.5 Сформируйте с помощью циклов следующий массив.', () => {
    const testCases = [
      {
        input: undefined,
        expected: [
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
        ],
      },
    ];

    simpleTest(testCases, createRepeatedArray);
  });
});
