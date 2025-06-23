//1
const person = {
  name: 'Maria',
  age: 22,
  hobbies: ['Спорт', 'Чтение'],
}
console.log(Object.keys(person)) // [ 'name', 'age', 'hobbies' ]
console.log(Object.entries(person)) // [ [ 'name', 'Maria' ], [ 'age', 22 ], [ 'hobbies', [ 'Спорт', 'Чтение' ] ] ]

console.log(person.name) // Maria
console.log(person.age) // 22
console.log(person.hobbies) // [ 'Спорт', 'Чтение' ]

console.log(person['name']) // Maria
console.log(person['age']) // 22
console.log(person['hobbies']) // [ 'Спорт', 'Чтение' ]

//2
person.work = 'developer'
console.log(Object.keys(person)) // [ 'name', 'age', 'hobbies', 'work' ]
console.log(person.work) // developer

person['age'] = 21
console.log(person.age) // 21
console.log(person['age']) // 21

delete person['hobbies']
console.log(Object.entries(person)) // [ [ 'name', 'Maria' ], [ 'age', 21 ], [ 'work', 'developer' ] ]