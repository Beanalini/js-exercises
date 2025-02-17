export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

export function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return person.city.toLowerCase() === "manchester";
}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  const MAX_BUS_CAPACITY = 40;
  return Math.ceil(people / MAX_BUS_CAPACITY);
}

export function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  return arr.filter((animal) => animal === "sheep").length;
}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  const { city, postCode } = person.address;
  return postCode.charAt(0) === "M" && city === "Manchester";
}
