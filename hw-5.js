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

let dayOfWeek = "Sunday";
let b;
switch (dayOfWeek) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    b = "That is a working day";
    break;
  case "Saturday":
  case "Sunday":
    b = "That is a weekend";
    break;
  default:
    b = "That isn't a day of the week";
}
console.log(b);

let monthNum = 6;
let c;
switch (monthNum) {
  case 12:
  case 1:
  case 2:
    c = "Winter";
    break;
  case 3:
  case 4:
  case 5:
    c = "Spring";
    break;
  case 6:
  case 7:
  case 8:
    c = "Summer";
    break;
  case 9:
  case 10:
  case 11:
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
let numTwo = 0;
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
    if (numTwo === 0) {
      p = "Not possible";
    } else {
      p = numOne / numTwo;
    }
    break;
  default:
    p = "Not possible";
}
console.log(p);
