//1
let sentence = "JavaScript is fun!";
console.log(sentence.includes("fun")); // true

//2
let variable;
if (!variable) {
  console.log("Переменная имеет falsy значение");
}

//3
let firstName = "Anna";
let lastName = "Juel";
let occupation = "frontend developer";
console.log(`Hello, my name is ${firstName} ${lastName}. I am a ${occupation}.`); //Hello, my name is Anna Juel. I am a frontend developer.

//4
console.log(null === undefined); // false, так как это разные типы
console.log(null == undefined); // true, так как они оба "пустые", а здесь проверяется только содержимое, без типов данных

//5
console.log(1 + '1'); // "11" - вторая единица является строкой, поэтому другой операнд преобразуется в строку, а строки складываются