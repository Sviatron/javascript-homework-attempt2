// Напиши функцію-конструктор Account, яка створює об'єкт з властивостями login і email.
//  В prototype функції-конструктора добав метод getInfo(),
//  який виводить в консоль значення полів login і email об'єкта який його викликав.

// function Account({ login, email }) {
//   this.login = login;
//   this.email = email;
// }
// Account.prototype.getInfo = function () {
//   console.log(`Login: ${this.login}, Email: ${this.email}`);
// };
// const mango = new Account({
//   login: "Mangozedog",
//   email: "mango@dog.woof",
// });
// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: "Poly",
//   email: "poly@mail.com",
// });
// poly.getInfo(); // Login: Poly, Email: poly@mail.com

//Напиши клас User для створення користувача з наступними властивостями:
// name — рядок
// age — число
// followers — число
// Добав метод getInfo(), який, виводить рядок: User ${ім'я} is ${вік} years old and has ${кількість фоловерів} followers

class User {
  constructor({ name, age, followers }) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }
  getInfo() {
    return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
  }
}
const mango = new User({
  name: "Mango",
  age: 2,
  followers: 20,
});
console.log(mango.getInfo()); // User Mango is 2 years old and has 20 followers

const poly = new User({
  name: "Poly",
  age: 3,
  followers: 17,
});
console.log(poly.getInfo()); // User Poly is 3 years old and has 17 followers

class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }
  addItems(item) {
    this.items.push(item);
  }
  removeItems(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}
const storage = new Storage([
  "Нанітоіди",
  "Пролонгер",
  "Залізні жупи",
  "Антигравітатор",
]);

const items = storage.getItems();
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItems("Дроїд");
console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItems("Пролонгер");
console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]

class Car {
  constructor({ price, maxSpeed }) {
    this.speed = 0;
    this.price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = false;
    this.distance = 0;
  }
  /*
   * Додай статичний метод `getSpecs(car)`,
   * який приймає об'єкт-машину як параметр і виводить
   * в консоль значення властивостей maxSpeed, speed, isOn, distance и price.
   */
  static getSpecs(car) {
    console.log(
      `Max speed: ${car.maxSpeed}, Speed: ${car.speed}, Is On: ${car.isOn}, Distance: ${car.distance}, Price: ${car.price}`
    );
  }
  /*
   * Додай геттер і сеттер для властивості price,
   * який буде працювати з властивістю ціни автомобіля.
   */
  get price() {
    return this._price;
  }
  set price(newPrice) {
    return (this._price = newPrice);
  }
  /*
   * Додай код для того, щоб завести автомобіль
   * Записує у властивість isOn значення true
   */
  turnOn() {
    this.isOn = true;
  }

  /*
   * Додай код для того, щоб заглушити автомобіль
   * Записує у властивість isOn значення false,
   * і скидає поточну швидкість в 0
   */
  turnOff() {
    (this.isOn = false), (this.speed = 0);
  }

  /*
   * Додає до властивості speed отримане значення,
   * за умови, що результуюча швидкість
   * не більше, ніж значення властивості maxSpeed
   */
  accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
      this.speed += value;
    }
  }

  /*
   * Забирає від властивості speed отримане значення,
   * за умови, що результуюча швидкість не менше нуля
   */
  decelerate(value) {
    if (this.speed - value >= 0) {
      this.speed -= value;
    }
  }

  /*
   * Додає в поле distance кілометраж (hours * speed),
   * але тільки в тому випадку, якщо машина заведена!
   */
  drive(hours) {
    if (this.isOn) {
      this.distance += hours * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
