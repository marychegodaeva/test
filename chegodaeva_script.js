//1
const student = {
  name: "Иван",
  age: 20,
  courses: ["Математика", "История", "Программирование"],
  address: {
    city: "Москва",
    street: "Ленинская",
    house: 10,
  },
};

const shallowCopy1 = { ...student };
shallowCopy1.courses.push("Физика");
shallowCopy1.address.city = "Санкт-Петербург";
console.log(student); // courses: [ 'Математика', 'История', 'Программирование', 'Физика' ], address: { city: 'Санкт-Петербург', street: 'Ленинская', house: 10 }

const shallowCopy2 = Object.assign({}, student);
shallowCopy2.courses.push("Химия");
shallowCopy2.address.street = "Невская";
console.log(student); // courses: [ 'Математика', 'История', 'Программирование', 'Физика', 'Химия' ], address: { city: 'Санкт-Петербург', street: 'Невская', house: 10 }

//2
const user = {
  name: "Alice",
  age: 30,
  address: {
    city: "Wonderland",
    zip: "12345",
  },
  sayHi: () => console.log("Hello, Alice!"),
};

const jsonCopyUser = JSON.parse(JSON.stringify(user));
console.log(jsonCopyUser);
// {
// name: 'Alice',
// age: 30,
// address: { city: 'Wonderland', zip: '12345' }
// }
jsonCopyUser.sayHi?.(); // Ошибка, так как функции не копируются

//3
function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj; // Если объект равен null или не является объектом, возвращаем его как есть
  }

  if (Array.isArray(obj)) { // Если объект является массивом, создаем новый массив
    const arrCopy = []; // Создаем пустой массив для копии
    for (let i = 0; i < obj.length; i++) { // Проходим по каждому элементу исходного массива
      arrCopy[i] = deepCopy(obj[i]); // Рекурсивно копируем каждый элемент и добавляем его в новый массив
    }
    return arrCopy; // Возвращаем скопированный массив
  }

  const objCopy = {}; // Если объект не является массивом, создаем новый объект
  for (const key in obj) { // Проходим по каждому свойству исходного объекта
    if (obj.hasOwnProperty(key)) { // Проверяем, является ли свойство собственным свойством объекта (а не унаследованным)
      objCopy[key] = deepCopy(obj[key]); // Рекурсивно копируем значение каждого свойства и добавляем его в новый объект
    }
  }
  return objCopy; // Возвращаем скопированный объект
}

const deepCopyUser = deepCopy(user);
deepCopyUser.address.city = "New Wonderland";
console.log(user.address.city); // Wonderland
console.log(deepCopyUser.address.city); // New Wonderland
