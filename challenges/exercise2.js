export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map((num) => Math.pow(num, 2));
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  return words
    .map((word, index) => {
      return index === 0
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  return people.reduce((subjCounter, person) => {
    return subjCounter + person.subjects.length;
  }, 0);
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  //use .some() to return first instance where callbackFunc returns true
  return menu.some((recipe) => recipe.ingredients.includes(ingredient));
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  return [...new Set(arr1.filter((num) => arr2.includes(num)).sort())];
}
