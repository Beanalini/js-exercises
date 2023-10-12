import {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
} from "../challenges/exercise5";

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

describe("isValidDNA", () => {
  test("return true when string contains the DNA string characters CGTA only ", () => {
    expect(isValidDNA("GTCA")).toBe(true);
    expect(isValidDNA("CCATAAGAATTA")).toBe(true);
    expect(isValidDNA("AATCCCCCGTTT")).toBe(true);
  });

  test("return false when string contains non DNA characters", () => {
    expect(isValidDNA("GGTXCTA")).toBe(false);
    expect(isValidDNA("CCATQRAAGAATTA")).toBe(false);
    expect(isValidDNA("AATXXCCCCCGZTTT")).toBe(false);
  });

  test("it is not case sensitive", () => {
    expect(isValidDNA("GgTxCTA")).toBe(false);
    expect(isValidDNA("CCaTGAAtTcA")).toBe(true);
    expect(isValidDNA("aact")).toBe(true);
  });
});

describe("getComplementaryDNA", () => {
  test("error thrown if not a valid DNA string", () => {
    expect(() => {
      getComplementaryDNA("GGTXCTA");
    }).toThrow("Not a valid DNA string");
  });
  test("Returns a string of complementary DNA base pairs", () => {
    expect(getComplementaryDNA("ACTG")).toBe("TGAC");
    expect(getComplementaryDNA("GATC")).toBe("CTAG");
    expect(getComplementaryDNA("CCATGCATT")).toBe("GGTACGTAA");
  });
});

describe("isItPrime", () => {
  test("it throws an error if n is not passed", () => {
    expect(() => {
      isItPrime();
    }).toThrow("n is required");

    expect(() => {
      isItPrime("foo");
    }).toThrow("a Number is required");
  });
  test("returns false if number is 0 or 1", () => {
    expect(isItPrime(0)).toBe(false);
    expect(isItPrime(1)).toBe(false);
  });
  test("return false if number is even", () => {
    expect(isItPrime(4)).toBe(false);
    expect(isItPrime(112)).toBe(false);
    expect(isItPrime(66)).toBe(false);
    expect(isItPrime(42)).toBe(false);
  });
  test("return true if number is a prime number", () => {
    expect(isItPrime(2)).toBe(true);
    expect(isItPrime(97)).toBe(true);
    expect(isItPrime(113)).toBe(true);
    expect(isItPrime(977)).toBe(true);
  });
});

describe("createMatrix", () => {
  test("returns a square matrix with rows and columns defined by n with each element set to the value of fill.", () => {
    const matrix = createMatrix(2, "bob");
    const expected = [
      ["bob", "bob"],
      ["bob", "bob"],
    ];
    expect(matrix).toEqual(expected);
  });
  test("returns a 4 by 4 matrix with rows and columns defined by n with each element set to 'bob.", () => {
    const matrix1 = createMatrix(4, "bob");
    const expected1 = [
      ["bob", "bob", "bob", "bob"],
      ["bob", "bob", "bob", "bob"],
      ["bob", "bob", "bob", "bob"],
      ["bob", "bob", "bob", "bob"],
    ];
    expect(matrix1).toEqual(expected1);
  });
  test("returns a 1 by 1 matrix with  element set to 'bob.", () => {
    const matrix2 = createMatrix(1, "bob");
    const expected2 = [["bob"]];
    expect(matrix2).toEqual(expected2);
  });
  test("returns an empty array when  value of matrix size is 0", () => {
    const matrix3 = createMatrix(0, "bob");
    const expected3 = [];
    expect(matrix3).toEqual(expected3);
  });
  test("Works with different fill types - creates a 2x2 matrix with each element set to 10", () => {
    const matrix4 = createMatrix(4, 10);
    const expected4 = [
      [10, 10, 10, 10],
      [10, 10, 10, 10],
      [10, 10, 10, 10],
      [10, 10, 10, 10],
    ];
    expect(matrix4).toEqual(expected4);
  });
});

describe("areWeCovered", () => {
  const staff = [
    { name: "Sophia", rota: ["Tuesday"] },
    { name: "Alex", rota: ["Monday", "Friday"] },
    { name: "Nicola", rota: ["Tuesday", "Wednesday"] },
    { name: "Ben", rota: ["Monday", "Tuesday"] },
    { name: "Pauline", rota: ["Monday", "Tuesday", "Friday"] },
  ];
  test("returns false if staff array is empty", () => {
    expect(areWeCovered([], "Thursday")).toEqual(false);
  });
  test("returns false if no staff are working on the required day", () => {
    expect(areWeCovered(staff, "Friday")).toEqual(false);
  });
  test("returns false if the number of staff working on the required day is less than 3", () => {
    expect(areWeCovered(staff, "Friday")).toEqual(false);
  });
  test("returns true if the number of staff working on the required day is equal to 3", () => {
    expect(areWeCovered(staff, "Monday")).toEqual(true);
  });
  test("returns true if the number of staff working on the required day is greater than 3", () => {
    expect(areWeCovered(staff, "Tuesday")).toEqual(true);
  });
});
