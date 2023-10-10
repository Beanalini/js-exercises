export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  let lowNums = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 1) lowNums.push(nums[i]);
  }
  return lowNums;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let newNames = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i][0] === char) newNames.push(names[i]);
  }
  return newNames;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let verbWords = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].substring(0, 3) === "to ") verbWords.push(words[i]);
  }
  return verbWords;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let intNums = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 1 === 0) intNums.push(nums[i]);
  }
  return intNums;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  let userCity = [];
  for (let i = 0; i < users.length; i++) {
    userCity.push(users[i].data.city.displayName);
  }
  return userCity;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
}
