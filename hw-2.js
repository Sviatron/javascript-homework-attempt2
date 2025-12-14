const celsius = 18;
const fahreinheit = (celsius * 9) / 5 + 32;
console.log(fahreinheit);

const daysInMonth = 31;
const hoursInMonth = daysInMonth * 24;
const minutesInMonth = hoursInMonth * 60;
console.log(minutesInMonth);

let playerHealth = 100;
let playerEnergy = 100;
playerHealth = playerHealth - 67;
playerEnergy = playerEnergy - 41;
console.log(playerHealth, playerEnergy);

let totalPrice = 100;
const discount = (totalPrice * 1) / 10;
const discountedPrice = totalPrice - discount;
console.log(discountedPrice);

const floatNumber = 12.78;
console.log(Math.floor(floatNumber));

const floatString = "45.67";
let parsedFloat = parseFloat(floatString);
console.log(parsedFloat);

const intString = "123";
let parsedInt = parseInt(intString);
console.log(parsedInt);

let number = 36;
const sqrtNumber = Math.sqrt(number);
console.log(sqrtNumber);

const integer = 42;
const stringNumber = "256";
const convertedInt = parseInt(stringNumber);
console.log(convertedInt);
