import {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies,
} from "../challenges/exercise005";

describe("findNextNumber", () => {
  test("returns the next number after the given number in the array", () => {
    //Arrange,act,assert all on the same lines
    expect(findNextNumber([5, 3, 7, 8, 1, 10], 1)).toBe(10);
    expect(findNextNumber([4, 22, 654, 123, 65, 23, 40, 1], 22)).toBe(654);
  });

  test("if the number is not found in the array, returns null", () => {
    //Arrange,act,assert all on the same lines
    expect(findNextNumber([5, 3, 7, 8, 1, 10], 55)).toBe(null);
  });

  test("if the number is found more than once, returns the number after the first instance", () => {
    //Arrange,act,assert all on the same lines
    expect(findNextNumber([5, 3, 7, 8, 1, 3, 10], 3)).toBe(7);
  });

  test("if the number is found in the final index position of the array, returns null", () => {
    //Arrange,act,assert all on the same lines
    expect(findNextNumber([5, 3, 7, 8, 1, 3, 10], 10)).toBe(null);
  });
});

describe("count1sand0s", () => {
  //Arrange,act,assert all on the same lines
  test("returns an object with the count of 1s and 0s in a string", () => {
    expect(count1sand0s("11000")).toEqual({
      1: 2,
      0: 3,
    });

    expect(count1sand0s("0101010111")).toEqual({
      1: 6,
      0: 4,
    });

    expect(count1sand0s("1111111")).toEqual({
      1: 7,
      0: 0,
    });

    expect(count1sand0s("0111")).toEqual({
      1: 3,
      0: 1,
    });
  });
});

describe("reverseNumber", () => {
  //Arrange,act,assert all on the same lines
  test("reverses the digits of a number", () => {
    expect(reverseNumber(5)).toBe(5);
    expect(reverseNumber(104)).toBe(401);
    expect(reverseNumber(12345)).toBe(54321);
    expect(reverseNumber(100)).toBe(1); // No leading 0 necessary
  });
});

describe("sumArrays", () => {
  test("returns the total of the numbers in all sub arrays", () => {
    const arrs = [[1, 2, 3], [6, 3, 1], [1], [9, 10], [3, 5]]; //arrange
    expect(sumArrays(arrs)).toBe(44); //act and assert
  });
});

describe("arrShift", () => {
  test("returns an array with the first and last items swapped", () => {
    expect(arrShift([1, 2])).toEqual([2, 1]); //arrange, act & assert
    expect(arrShift([1, 2, 3])).toEqual([3, 2, 1]); //arrange, act & assert
    expect(arrShift([1, 2, 3, 4])).toEqual([4, 2, 3, 1]); //arrange, act & assert
  });

  test("makes no difference when the array length is < 2", () => {
    expect(arrShift([1])).toEqual([1]); //arrange, act & assert
    expect(arrShift([])).toEqual([]); //arrange, act & assert
  });
});

describe("findNeedle", () => {
  test("returns true if any of the properties of an object contain the specified string", () => {
    const obj1 = {
      //arrange
      name: "LINNMON",
      description: "Small round table",
      price: 31.89,
      store: "Warrington",
      code: 12872,
    };
    expect(findNeedle(obj1, "table")).toBe(true); //arrange - 'table', act and assert

    // Note that the objects provided to the function could have any keys/values
    const obj2 = {
      //arrange
      product_name: "Sparkle n Shine Dishwasher Tablets",
      price: 1.99,
      location: "Hulme",
      discounted: false,
      available: true,
    };
    expect(findNeedle(obj2, "Dishwasher")).toBe(true); //act and assert
  });

  test("returns false if none of the properties of an object contain the specified string", () => {
    const obj1 = {
      //arrange
      name: "LINNMON",
      description: "Small round table",
      price: 31.89,
      store: "Warrington",
      code: 12872,
    };
    expect(findNeedle(obj1, "chair")).toBe(false); //part arrange - 'chair, act, assert

    // Note that the objects provided to the function could have any keys/values
    const obj2 = {
      //arrange
      product_name: "Sparkle n Shine Dishwasher Tablets",
      price: 1.99,
      location: "Hulme",
      discounted: false,
      available: true,
    };
    expect(findNeedle(obj2, "Carpet Cleaner")).toBe(false); //part arrange - 'carpet cleaner', act, assert
  });

  test("The search string should not be case sensitive", () => {
    const obj1 = {
      //arrange
      name: "LINNMON",
      description: "Small round table",
      price: 31.89,
      store: "Warrington",
      code: 12872,
    };

    expect(findNeedle(obj1, "warrington")).toBe(true); //arrange, act, assert
    expect(findNeedle(obj1, "linnmon")).toBe(true);
    expect(findNeedle(obj1, "Liverpool")).toBe(false);
  });
});

describe("getWordFrequencies", () => {
  test("returns the frequencies of each word in a string", () => {
    expect(getWordFrequencies("hello world")).toEqual({
      //arrange,act assert
      hello: 1,
      world: 1,
    });

    expect(getWordFrequencies("the cat is hairier than the rat")).toEqual({
      //arrange,act assert
      the: 2,
      cat: 1,
      is: 1,
      hairier: 1,
      than: 1,
      rat: 1,
    });

    expect(getWordFrequencies("hello hello hello")).toEqual({
      //arrange,act assert
      hello: 3,
    });
  });

  test("ignores capitalisation", () => {
    expect(getWordFrequencies("Hello hello hello")).toEqual({
      //arrange,act assert
      hello: 3,
    });
  });

  test("ignores punctuation", () => {
    // Hint: Google "JavaScript remove special characters from string" to get some ideas!
    expect(
      getWordFrequencies("Hello, hello hello! What have we here?") //arrange,act assert
    ).toEqual({
      hello: 3,
      what: 1,
      have: 1,
      we: 1,
      here: 1,
    });
  });
});
