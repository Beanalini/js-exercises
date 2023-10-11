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
  return arrs.flat().reduce((total, num) => {
    return total + num;
  }, 0);
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  const arrLen = arr.length;
  if (arrLen > 1) [arr[0], arr[arrLen - 1]] = [arr[arrLen - 1], arr[0]];
  return arr;
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  return Object.values(haystack).some((val) =>
    val.toString().toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  // /[,!?()]/ RegExp used to match & replace unwanted chars
  const wordFreq = {};
  str
    .replace(/[,!?()]/g, "")
    .toLowerCase()
    .split(" ")
    .forEach((word) => {
      wordFreq[word] ? (wordFreq[word] += 1) : (wordFreq[word] = 1);
    });
  return wordFreq;
};
