//Object.keys (obj) — поверне масив, з ключами об'єкта obj у вигляді рядків.
// Object.values (obj) — поверне масив, зі значеннями властивостей об'єкта obj.
// Object.entries (obj) — поверне масив записів, кожним елементом якого буде ще один масив з 2-х елементів, ключа і значення цього ключа з об'єкта Obj.
const user = {
  hobby: "Rollerskating",
  premium: true,
};
user.mood = "Happy :D";
user.hobby = "Skydiving";
user.premium = false;
console.log(user);
for (const key in user) {
  console.log(`${key} : ${user[key]}`);
}

function countProps(obj) {
  return Object.entries(obj).length;
}
console.log(countProps(user));

const employees = {
  Sarah: 5,
  Tara: 10,
  Jack: 15,
  Sviat: 999,
};
function findBestEmployee(obj) {
  let max = 0;
  let name = "";
  for (const key in obj) {
    // max = obj[key];
    if (obj[key] > max) {
      max = obj[key];
      name = key;
    }
  }
  return name;
}
console.log(findBestEmployee(employees));

const salaries = {
  Mary: 1400,
  John: 1900,
  Veronica: 2500,
  Sviat: 6767,
};
function countTotalSalary(employees) {
  let total = 0;
  for (let key in employees) {
    total += employees[key];
  }
  return total;
}
console.log(countTotalSalary(salaries));

const vegies = [
  { name: "Strawberry", price: 130, quantity: 4 },
  { name: "Raspberry", price: 270, quantity: 3 },
  { name: "Apple", price: 40, quantity: 7 },
  { name: "Orange", price: 120, quantity: 2 },
];

function getAllPropValues(arr, prop) {
  let newArr = [];
  for (const entry of arr) {
    newArr.push(entry[prop]);
  }
  return newArr;
}
console.log(getAllPropValues(vegies, "name"));

const products = [
  { name: "Strawberry", price: 130, quantity: 4 },
  { name: "Raspberry", price: 270, quantity: 3 },
  { name: "Apple", price: 40, quantity: 7 },
  { name: "Orange", price: 120, quantity: 2 },
];
function calculateTotalPrice(allProdcuts, productName) {
  let sum = 0;
  for (const item of allProdcuts) {
    if (item[name] === productName) {
      sum = item.price * item.quantity;
    }
  }
  return sum;
}
console.log(calculateTotalPrice(products, "Apple"));
