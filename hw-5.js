let choice = "Tea";
let a;
switch (choice) {
  case "Tea":
    a = "You have chosen tea";
    break;
  case "Coffee":
    a = "You have chosen coffee";
    break;
  case "Fruit juice":
    a = "You have chosen fruit juice";
    break;
  default:
    a = "That drink isn't available";
}
console.log(a);

let dayOfWeek = "Monday";
let b;
switch (dayOfWeek) {
  case "Monday" || "Tuesday" || "Wednesday" || "Thursday" || "Friday":
    b = "That is a working day";
    break;
  case "Saturday" || "Sunday":
    b = "That is a weekend";
    break;
  default:
    b = "That isn't a day of the week";
}
console.log(b);

let monthNum = 6;
let c;
switch (monthNum) {
  case 12 || 1 || 2:
    c = "Winter";
    break;
  case 3 || 4 || 5:
    c = "Spring";
    break;
  case 6 || 7 || 8:
    c = "Summer";
    break;
  case 9 || 10 || 11:
    c = "Autumn";
    break;
  default:
    c = "Not a month";
}
console.log(c);

let trafficLight = "Yellow";
let d;
switch (trafficLight) {
  case "Red":
    d = "Stop";
    break;
  case "Yellow":
    d = "Get ready";
    break;
  case "Green":
    d = "Go";
    break;
  default:
    d = "Not a traffic light color!";
}
console.log(d);

let sumOfNumbers = prompt("Enter a math sign");
let numOne = 6;
let numTwo = 7;
let p;
switch (sumOfNumbers) {
  case "+":
    p = numOne + numTwo;
    break;
  case "-":
    p = numOne - numTwo;
    break;
  case "*":
    p = numOne * numTwo;
    break;
  case "/":
    p = numOne / numTwo;
    break;
  default:
    p = "Not possible";
}
console.log(p);
