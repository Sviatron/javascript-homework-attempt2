// Функція calculate тут
function calculate(a, b, operation) {
  return operation(a, b);
}

// Стрілкові функції для операцій тут
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (a === 0 || b === 0) {
    return "Can't divide by 0";
  }
  return a / b;
};

// Тестування
console.log(calculate(10, 5, add)); // Повинно показати 15
console.log(calculate(10, 5, subtract)); // Повинно показати 5
console.log(calculate(10, 5, multiply)); // Повинно показати 50
console.log(calculate(10, 5, divide)); // Повинно показати 2
console.log(calculate(10, 0, divide)); // Повинно показати помилку
