import {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
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
