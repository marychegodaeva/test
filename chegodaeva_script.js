//1
let n1 = 2 * 2 + 2
let n2 = (Math.sin(54) * Math.cos(16)) ** 2
let n3 = (((16 * Math.sqrt(13.2 * 71.9)) / (2.4 / (7 ** 4))) + (3 ** Math.sqrt(49))) * (2 ** 7)

console.log('n1 =', Math.round(n1)) // 6
console.log('n2 =', Math.round(n2)) // 0.2863637210469634 ~ 0
console.log('n3 =', Math.round(n3)) // 63399251.636757076 ~ 63399252

//2
let num1 = 4;
let num2 = 7;
let num3 = 10;
let num4 = 15;

function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(num1)); // true
console.log(isEven(num2)); // false
console.log(isEven(num3)); // true
console.log(isEven(num4)); // false

//3
function greet(name) {
  if (!name) {
    console.log("Hello, Guest!");
  } else {
    console.log("Hello, " + name + "!");
  }
}

greet(); // Hello, Guest!
greet("Ivan"); // Hello, Алексей!
greet(""); // Hello, Guest!