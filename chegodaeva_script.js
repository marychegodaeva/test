//1
function createLocalVariable() {
  let localVar = "I am local";
  console.log(localVar); // I am local
}

createLocalVariable();
console.log(localVar); // Ошибка: localVar is not defined

//2
if (true) {
  let blockVar = "I am inside a block";
  console.log(blockVar); // I am inside a block
}
console.log(blockVar); // Ошибка: blockVar is not defined

//3
// Hoisting — это механизм в JavaScript, при котором объявления переменных и функций перемещаются 
// вверх своей области видимости перед выполнением кода.
sayHello(); // Hello!
function sayHello() {
  console.log("Hello!");
}
// Функция sayHello поднимается вверх, поэтому её можно вызвать до объявления.

