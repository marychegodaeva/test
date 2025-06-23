//1
function average(...numbers) {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}
console.log(average(2, 2, 2, 3, 5, 6, 8, 13, 14, 78)) // 13.3

//2
function formatUserInfo({ name, age, country }) {
  return `Имя: ${name}, Возраст: ${age}, Страна: ${country}`;
}
console.log(formatUserInfo({ name: 'Иван', age: 14, country: 'Россия' })) // Имя: Иван, Возраст: 14, Страна: Россия

//3
const user = {
  name: "Иван",
  age: 30,
  address: {
    city: "Москва",
    country: "Россия"
  },
  hobbies: ["чтение", "спорт", "музыка"]
};
const { name, address: { country }, hobbies: [firstHobby] } = user;

console.log(name) // Иван
console.log(firstHobby) // чтение 
console.log(country) // Россия

//4
const originalArray = [2, 3, 4];
const newArray = [1, ...originalArray, 5, 6];
console.log(newArray) // [ 1, 2, 3, 4, 5, 6 ]

//5
function removeParam(paramToRemove, { [paramToRemove]: _, ...rest }) {
  return rest;
}

let man = {
  name: 'Oleg',
  age: 23,
  work: 'developer'
}

console.log(removeParam( 'age', man )) // { name: 'Oleg', work: 'developer' }
console.log(removeParam( 'work', man )) // { name: 'Oleg', age: 23 }