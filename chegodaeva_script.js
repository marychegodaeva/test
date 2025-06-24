const student = {
  name: 'Valentin',
  age: 21,
  grades: [ 'A', 'B', 'C', 'D' ],
  address: {
    city: 'Krasnodar',
    street: 'Lenina'
  }
}

console.log(student.name) // Valentin
console.log(student.grades) // [ 'A', 'B', 'C', 'D' ]
console.log(student.address) // { city: 'Krasnodar', street: 'Lenina' }

console.log(student['age']) // 21
console.log(student['grades']) // [ 'A', 'B', 'C', 'D' ]
console.log(student['address']) // { city: 'Krasnodar', street: 'Lenina' }

student.isGraduated = '2020'
console.log(student.isGraduated) // 2020
console.log(student['isGraduated']) // 2020

student.name = 'Ivan'
console.log(student['name']) // Ivan
console.log(student.name) // Ivan

delete student.address
console.log(student.address) // undefined
console.log(student)
// {
//   name: 'Ivan',
//   age: 21,
//   grades: [ 'A', 'B', 'C', 'D' ],
//   isGraduated: '2020'
// }