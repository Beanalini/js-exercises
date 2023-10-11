export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  const indexN = nums.indexOf(n);
  return indexN === -1 || indexN === nums.length - 1 ? null : nums[indexN + 1];
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  let countArr = { 0: 0, 1: 0 };
  str.split("").forEach((entry) => {
    //checking for non 0 or 1 entries in input string
    if (countArr[entry] !== undefined) countArr[entry]++;
  });
  return countArr;
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  return +n.toString().split("").reverse().join("");
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};
