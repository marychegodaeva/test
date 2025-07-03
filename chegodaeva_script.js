//1
const squareNumbers = (numbers) => numbers.map(num => num * num);
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = squareNumbers(numbers);
console.log(squaredNumbers); // [1, 4, 9, 16, 25]

//2
const myObject = {
  value: "Hello, World!",
  printValue: function() {
    setTimeout(() => {
      console.log(this.value);
    }, 1000);
  }
};

myObject.printValue(); // Hello, World!

//3
const applyFunctionToArray = (func, array) => array.map(item => func(item));
// const numbers = [1, 2, 3, 4, 5];
const double = x => x * 2;
const doubledNumbers = applyFunctionToArray(double, numbers);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
