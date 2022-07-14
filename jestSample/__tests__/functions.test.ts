import { sumOfArray } from "../functions";

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

// test("sumOfArray(['hoge', 'fuga']) causes exception", (): void => {
//   expect((): number => sumOfArray(["hoge", "fuga"])).toThrow();
// });

// test("sumOfArray(['hoge', 'fuga']) = 'hogefuga'", (): void => {
//   expect(sumOfArray(["hoge", "fuga"])).toBe('hogefuga');
// });
