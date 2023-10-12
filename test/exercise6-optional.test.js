import { sumDigits } from "../challenges/exercise6-optional";

describe("sumDigits", () => {
  test("it throws an error if n is not passed", () => {
    expect(() => {
      sumDigits();
    }).toThrow("n is required");

    expect(() => {
      sumDigits("foo");
    }).toThrow("a Number is required");
  });
  test("returns the digit if the number contains 1 digit", () => {
    expect(sumDigits(4)).toBe(4);
  });
  test("returns the sum of the digits passed to the function", () => {
    expect(sumDigits(234)).toBe(9);
  });
  test("returns 0  if all digit is 0", () => {
    expect(sumDigits(0)).toBe(0);
  });
  test("returns sum of digits if number contains 0's", () => {
    expect(sumDigits(102000)).toBe(3);
  });
});
