import { sumMultiples } from "../challenges/exercise5";

describe("sumMultiples", () => {
  test("it throws an error if not passed an array", () => {
    expect(() => {
      sumMultiples();
    }).toThrow("arr is required");

    expect(() => {
      sumMultiples("blob");
    }).toThrow("an Array is required");
  });
  test("returns the sum of any numbers that are multiples of 3 or 5", () => {
    expect(sumMultiples([3, 5])).toBe(8);
    expect(sumMultiples([1, 0, 23, 15, 25])).toBe(40);
    expect(sumMultiples([5, 100, 23, 15, 25])).toBe(145);
  });

  test("returns sum of multiples of 3 or 5 if values are decimal", () => {
    expect(sumMultiples([15.0, 17, 20, 35.0])).toBe(70);
    expect(sumMultiples([0, 0, 0])).toBe(0);
  });
  test("returns 0 if there are no multiples of 3 or 5", () => {
    expect(sumMultiples([4, 23, 0, 11])).toBe(0);
    expect(sumMultiples([0, 0, 0])).toBe(0);
  });
});
