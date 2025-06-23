// 1 задание
// Возьмите следующий код и приведите его в соответствие с общепринятым стандартом форматирования,
// соблюдая отступы, выравнивание и правила расстановки пробелов:
// function multiply(a,b){
//   return a*b;
// }
// const person ={name:'Alice',age:30};
// if(person.age>18){console.log('Adult');}
// else{console.log('Minor');}

// 2 задание
// Представьте, что вы работаете в команде, и вам нужно сделать код понятным для всех участников.
// Перепишите следующий код, используя понятные и логичные имена переменных и функций:
// function x(a, b) {
//   let c = a * b;
//   return c;
// }
// let d = x(5, 10);

// 3 задание
// Убедитесь, что в коде используется единый стиль оформления. В следующем коде присутствуют смешанные стили кавычек,
// разное использование var, let, и const, а также различное форматирование объектов и массивов. Исправьте код:
// let items = ["apple", 'banana', "orange"];
// let price = {apple: 1, banana: 2, orange:3 };
// const total = price['apple'] + price["banana"] + price.orange;

// function calculateTotal(items) {
//   return items.reduce(function(total, item) {return total + item.price; }, 0); }

// 4 задание
// Создайте функцию validateForm, которая принимает объект формы с полями name, email и password.
// Она должна выполнять проверки для каждого поля. Если какое-то поле не заполнено или содержит неверные данные,
// функция должна сразу возвращать ошибку, используя guard expressions. Если все данные верны,
// функция должна возвращать сообщение "Форма успешно отправлена".

//1
function multiply( a , b ) {
  return (a * b);
}

const person = {
  name: 'Alice',
  age: 30
};

if ( person.age > 18 ) { 
  console.log('Adult');
}
else {
  console.log('Minor');
}

//2
function multiplication( num1 , num2 ) {
  let result = num1 * num2;
  return result;
}
let example = multiplication ( 5, 10 );

//3
let items = ['apple', 'banana', 'orange'];
let price = {
  apple: 1, 
  banana: 2, 
  orange:3 
};
const total = price['apple'] + price['banana'] + price['orange'];

function calculateTotal(items) {
  return items.reduce( function( total, item ) {
    return total + item.price; 
  }, 0); 
}

//4
function validateForm(form) {
  if (!form.name || typeof form.name !== 'string') {
    return "Ошибка: поле 'name' не заполнено или содержит неверные данные.";
  }

  if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    return "Ошибка: поле 'email' не заполнено или содержит неверные данные.";
  }

  if (!form.password || form.password.length < 8) {
    return "Ошибка: поле 'password' должно содержать не менее 8 символов.";
  }

  return "Форма успешно отправлена";
}

const form1 = {
  name: "Ivan",
  email: "ivan@example.com",
  password: "password123"
};

const form2 = {
  name: "",
  email: "ivan@example.com",
  password: "password123"
};

console.log(validateForm(form1)); // Форма успешно отправлена
console.log(validateForm(form2)); // Ошибка: поле 'name' не заполнено или содержит неверные данные.
