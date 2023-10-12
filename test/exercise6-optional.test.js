import {
  sumDigits,
  createRange,
  hexToRGB,
  findWinner,
} from "../challenges/exercise6-optional";

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

describe("createRange", () => {
  test("Returns an array of numbers in the range between start and end with a given step size. ", () => {
    expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
    expect(createRange(0, 100, 10)).toEqual([
      0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
    ]);
    expect(createRange(130, 531, 100)).toEqual([130, 230, 330, 430, 530]);
  });
  test("returns an array with negative ranges ", () => {
    expect(createRange(-25, -10, 5)).toEqual([-25, -20, -15, -10]);
  });
  test("returns an empty array when start value > end value ", () => {
    expect(createRange(10, 6, 2)).toEqual([]);
    expect(createRange(-4, -22, 3)).toEqual([]);
  });
  test("when step size not given - step size of 1 used  ", () => {
    expect(createRange(7, 15)).toEqual([7, 8, 9, 10, 11, 12, 13, 14, 15]);
    expect(createRange(-5, 0)).toEqual([-5, -4, -3, -2, -1, 0]);
  });
});

describe("hexToRGB", () => {
  test("Returns the decimal version of a given hexadecimal colour code ", () => {
    expect(() => {
      hexToRGB("#ZZ1133");
    }).toThrow("Not a valid Hex value");
  });

  test("Returns the decimal version of a given hexadecimal colour code ", () => {
    expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
  });
});

describe("findWinner", () => {
  const board1 = [
    ["X", "0", null],
    ["X", null, "0"],
    ["X", null, "0"],
  ];
  test("returns 'X' if player X has won", () => {
    expect(findWinner(board1)).toBe("X");
  });
  const board2 = [
    ["0", "0", "X"],
    ["X", "0", "0"],
    ["X", null, "0"],
  ];
  test("returns '0' if player 0 has won", () => {
    expect(findWinner(board2)).toBe("0");
  });
  const board3 = [
    ["0", "0", "X"],
    ["X", "X", "0"],
    ["X", null, "0"],
  ];
  test("returns null if there is no winner", () => {
    expect(findWinner(board3)).toBe(null);
  });
});
