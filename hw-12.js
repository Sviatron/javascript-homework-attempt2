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
function findBestEmployee(employees) {
  const max = Math.max(...Object.values(scores));
  return;
}
console.log(typeof {});
