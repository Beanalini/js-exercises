export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  let lowNums = [];
  nums.forEach((num) => {
    if (num < 1) lowNums.push(num);
  });
  return lowNums;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let newNames = [];
  names.forEach((name) => {
    if (name[0] === char) newNames.push(name);
  });
  return newNames;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let verbWords = [];
  words.forEach((word) => {
    if (word.substring(0, 3) === "to ") verbWords.push(word);
  });
  return verbWords;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let intNums = [];
  nums.forEach((num) => {
    if (num % 1 === 0) intNums.push(num);
  });
  return intNums;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  let userCity = [];
  users.forEach((user) => userCity.push(user.data.city.displayName));
  return userCity;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let rootNums = [];
  nums.forEach((num) => rootNums.push(+Math.sqrt(num).toFixed(2)));
  return rootNums;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let sentMatch = [];
  sentences.forEach((sentence) => {
    if (sentence.toLowerCase().includes(str.toLowerCase()))
      sentMatch.push(sentence);
  });
  return sentMatch;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let longestSide = [];
  triangles.forEach((triangle) => longestSide.push(Math.max(...triangle)));
  return longestSide;
}
