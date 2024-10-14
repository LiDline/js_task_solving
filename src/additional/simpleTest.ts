type InputData = string | number | number[];

type TestCases = {
  input: InputData;
  expected: InputData | boolean;
  secondInput?: InputData;
};

export default function simpleTest<A, T>(
  testCases: TestCases[],
  func: (...args: A[]) => T,
) {
  testCases.forEach((obj, id) => {
    test(
      `${id + 1} Верный возврат для ${obj.input}` +
        `${obj.secondInput ? ' и ' + obj.secondInput : ''}`,
      () => {
        const res =
          obj.secondInput !== undefined
            ? func(obj.input as A, obj.secondInput as A)
            : func(obj.input as A);

        expect(res).toBe(obj.expected);
      },
    );
  });
}
