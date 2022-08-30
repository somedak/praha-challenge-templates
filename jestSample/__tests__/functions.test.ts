import { sumOfArray } from "../functions";
import { asyncSumOfArray } from "../functions";

// ////////////////////////////////////////
// Tests for sumOfArray
// ////////////////////////////////////////

test("sumOfArray([]) causes exception", (): void => {
  expect((): number => sumOfArray([])).toThrow();
});

test("sumOfArray([-7]) = -7", (): void => {
  expect(sumOfArray([-7])).toBe(-7);
});

test("sumOfArray([1, 2]) = 3", (): void => {
  expect(sumOfArray([1, 2])).toBe(3);
});

test("sumOfArray([0, 5, -9, 0]) = -4", (): void => {
  expect(sumOfArray([0, 5, -9, 0])).toBe(-4);
});

// test("sumOfArray(['hoge', 'fuga']) causes exception?", (): void => {
//   expect((): number => sumOfArray(["hoge", "fuga"])).toThrow();
// });
//
// => Type Error

// ////////////////////////////////////////
// Tests for asyncSumOfArray
// ////////////////////////////////////////

test("asyncSumOfArray([]) causes exception", (): Promise<void> => {
  return expect(asyncSumOfArray([])).rejects.toThrow();
});

test("asyncSumOfArray([-7]) = -7", (): Promise<void> => {
  return expect(asyncSumOfArray([-7])).resolves.toBe(-7);
});

test("asyncSumOfArray([1, 2]) = 3", (): Promise<void> => {
  return expect(asyncSumOfArray([1, 2])).resolves.toBe(3);
});

test("asyncSumOfArray([0, 5, -9, 0]) = -4", (): Promise<void> => {
  return expect(asyncSumOfArray([0, 5, -9, 0])).resolves.toBe(-4);
});
