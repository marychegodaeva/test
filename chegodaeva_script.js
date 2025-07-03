//1
const person = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

const greetFunction = person.greet;
greetFunction(); // Hello, my name is undefined

//2
// В первом случае, когда вызывается student.greet(), this ссылается на объект student, 
// поэтому this.name возвращает 'Alice'.
// Во втором случае, когда вызывается student.delayedGreet(), this внутри setTimeout теряет контекст и 
// ссылается на глобальный объект (window), где свойства name не существует, поэтому выводится undefined.
const student = {
  name: 'Alice',

  greet: function() {
    console.log(`Hello, ${this.name}!`);
  },

  delayedGreet: function() {
    setTimeout(() => this.greet(), 1000);
  }
};

student.greet(); // Hello, Alice
student.delayedGreet(); // Через 1 секунду выведет: Hello, Alice

//3
function greet(language, punctuation) {
  console.log(`${language}, ${this.name}${punctuation}`);
}

const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

greet.call(person1, "Hello", "!"); // Hello, Alice!
greet.apply(person2, ["Hi", "!!"]); // Hi, Bob!!
const greetAlice = greet.bind(person1, "Hey");
greetAlice("..."); // Hey, Alice...

//4
// В результате выполнения sayHelloToAdmin() в консоли будет выведено 'Hello, Bob', 
// потому что sayHelloToAdmin привязан к объекту admin с помощью bind.
// const sayHelloToUser = sayHello.bind(user);
// sayHelloToUser(); // Hello, John
