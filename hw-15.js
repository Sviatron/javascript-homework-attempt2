const users = [
  {
    name: "Moore Hensley",
    balance: 2811,
    friends: ["Sharlene Bush"],
    skills: ["lorem", "ipsum", "dolor"],
  },
  {
    name: "Sharlene Bush",
    balance: 3821,
    friends: ["Briana Decker", "Goldie Gentry"],
    skills: ["amet", "commodo", "elit"],
  },
  {
    name: "Elma Head",
    balance: 2278,
    friends: ["Goldie Gentry"],
    skills: ["ipsum", "anim", "laborum"],
  },
  {
    name: "Carey Barr",
    balance: 3951,
    friends: ["Blackburn Dotson"],
    skills: ["tempor", "velit", "culpa"],
  },
  {
    name: "Blackburn Dotson",
    balance: 1498,
    friends: ["Carey Barr"],
    skills: ["non", "proident", "mollit"],
  },
  {
    name: "Sheree Anthony",
    balance: 2764,
    friends: ["Briana Decker", "Goldie Gentry"],
    skills: ["irure", "ex", "nulla"],
  },
  {
    name: "Ross Vazquez",
    balance: 1793,
    friends: ["Moore Hensley"],
    skills: ["nostrud", "veniam", "adipisicing"],
  },
];

const calculateTotalBalance = (users) => {
  return users.reduce(
    (totalBalance, user) => (totalBalance += user.balance),
    0
  );
};

console.log(calculateTotalBalance(users)); // 20916

const getUsersWithFriend = (users, friendName) => {
  return users.reduce((friends, user) => user.friends === friendName, 0);
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
