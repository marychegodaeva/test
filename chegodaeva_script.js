//1
const student = {
  name: 'Иван',
  age: 20,
  courses: ['Математика', 'История', 'Программирование'],
  address: {
    city: 'Москва',
    street: 'Ленинская',
    house: 10
  }
};

const shallowCopy1 = { ...student };
shallowCopy1.courses.push('Физика');
shallowCopy1.address.city = 'Санкт-Петербург';
console.log(student); // courses: [ 'Математика', 'История', 'Программирование', 'Физика' ],  address: { city: 'Санкт-Петербург', street: 'Ленинская', house: 10 }

const shallowCopy2 = Object.assign({}, student);
shallowCopy2.courses.push('Химия');
shallowCopy2.address.street = 'Невская';
console.log(student); // courses: [ 'Математика', 'История', 'Программирование', 'Физика', 'Химия' ],  address: { city: 'Санкт-Петербург', street: 'Невская', house: 10 }

//2
const user = {
  name: "Alice",
  age: 30,
  address: {
    city: "Wonderland",
    zip: "12345"
  },
  sayHi: () => console.log('Hello, Alice!')
};

const jsonCopyUser = JSON.parse(JSON.stringify(user));
console.log(jsonCopyUser); 
// {
//   name: 'Alice',
//   age: 30,
//   address: { city: 'Wonderland', zip: '12345' }
// }
jsonCopyUser.sayHi?.(); // Ошибка, так как функции не копируются

//3
function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    const arrCopy = [];
    for (let i = 0; i < obj.length; i++) {
      arrCopy[i] = deepCopy(obj[i]);
    }
    return arrCopy;
  }

  const objCopy = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      objCopy[key] = deepCopy(obj[key]);
    }
  }
  return objCopy;
}

const deepCopyUser = deepCopy(user);
deepCopyUser.address.city = "New Wonderland";
console.log(user.address.city); // Wonderland
console.log(deepCopyUser.address.city); // New Wonderland
