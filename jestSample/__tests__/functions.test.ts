import { sumOfArray } from "../functions";
import { asyncSumOfArray } from "../functions";
import { asyncSumOfArraySometimesZero } from "../functions";

describe("sumOfArray", (): void => {
  test("empty array causes exception", (): void => {
    expect((): number => sumOfArray([])).toThrow();
  });

  test.each([
    { expected: -7, input: [-7] },
    { expected: +3, input: [1, 2] },
    { expected: -4, input: [0, 5, -9, 0] },
  ])("%o", ({ expected, input }): void => {
    expect(sumOfArray(input)).toBe(expected);
  });

  // test("string array causes exception?", (): void => {
  //   expect((): number => sumOfArray(["hoge", "fuga"])).toThrow();
  // });
  // => Test suite failed to run
  //    Type 'string' is not assignable to type 'number'.
});

describe("asyncSumOfArray", (): void => {
  test("empty array causes exception", (): Promise<void> => {
    return expect(asyncSumOfArray([])).rejects.toThrow();
  });

  test.each([
    { expected: -7, input: [-7] },
    { expected: +3, input: [1, 2] },
    { expected: -4, input: [0, 5, -9, 0] },
  ])(
    "%o",
    ({ expected, input }): Promise<void> => {
      return expect(asyncSumOfArray(input)).resolves.toBe(expected);
    }
  );
});

jest.mock("../util");

describe("asyncSumOfArraySometimesZero", (): void => {
  test("empty array returns 0", (): Promise<void> => {
    return expect(asyncSumOfArraySometimesZero([])).resolves.toBe(0);
  });

  test.each([
    { expected: -7, input: [-7] },
    { expected: +3, input: [1, 2] },
    { expected: -4, input: [0, 5, -9, 0] },
  ])(
    "%o",
    ({ expected, input }): Promise<void> => {
      // eslint-disable-next-line prettier/prettier
      return expect(asyncSumOfArraySometimesZero(input)).resolves.toBe(expected);
    }
  );

  // DatabaseMock.save() が例外を投げるテストケース？
});
