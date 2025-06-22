//1
let numbers = [2, 3, 4, 5];
console.log(numbers.map(num => num * num)); // [ 4, 9, 16, 25 ]

//2
let numbers2 = [1, 2, 2, 3, 4, 5, 5, 5, 6];
let uniqueNumbers = numbers2.filter((value, index, self) => {
  return self.indexOf(value) === index;
});
console.log(uniqueNumbers); // [ 1, 2, 3, 4, 5, 6 ]

//3
let numbers3 = [1, 2, 3];
console.log(numbers3.reduce((accumulator, currentValue) => accumulator + currentValue, 0)); // 6

//4
let numbers4 = [1, 2, 3, 4];
let reversedNumbers = [];
for (let i = numbers4.length - 1; i >= 0; i--) {
  reversedNumbers.push(numbers4[i]);
}
console.log(reversedNumbers); // [ 4, 3, 2, 1 ]

//5
let letString = "Hello";
const constString = "World";

letString = "Hello, again"; 
console.log(letString); // Hello, again
//constString = "Another World" - ошибка, так как const не позволяет изменять значение

let letArray = [1, 2, 3];
const constArray = [4, 5, 6];

letArray.push(4); 
console.log(letArray); // [ 1, 2, 3, 4 ]

constArray.push(7); // сработает, так как изменяется содержимое массива, а не сама переменная
console.log(constArray); // [ 4, 5, 6, 7 ]

letArray = [5, 6, 7]; 
console.log(letArray); // [ 5, 6, 7 ]
// constArray = [8, 9, 10] - ошибка, так как const не позволяет изменять значение