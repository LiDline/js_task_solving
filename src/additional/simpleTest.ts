type InputData = string | number | number[] | string[] | number[][] | null | object | undefined;

type TestCases = {
  input: InputData;
  expected: InputData | boolean;
  secondInput?: InputData;
};


/**
 * Проверяет функцию, переданную в качестве параметра, используя массив входных тестовых данных
 * @param testCases TestCases[]
 * @param func function
 * @return void
 */
export default function simpleTest<A, B, T>(
  testCases: TestCases[],
  func: (...args: (A | B)[]) => T,
) {
  testCases.forEach((obj, id) => {
    test(
      `${id + 1} Верный возврат для ${obj.input}` +
        `${obj.secondInput ? ' и ' + obj.secondInput : ''}`,
      () => {
        const res =
          obj.secondInput !== undefined
            ? func(obj.input as A, obj.secondInput as B)
            : func(obj.input as A);

        if (
          Array.isArray(obj.expected) ||
          (typeof obj.expected === 'object' && obj.expected != null)
        ) {
          expect(res).toStrictEqual(obj.expected);
        } else {
          expect(res).toBe(obj.expected);
        }
      },
    );
  });
}
