//1
const person = {
  name: "Alice",
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

const greetFunction = person.greet;
greetFunction(); // Hello, my name is undefined

//2
function greet(language, punctuation) {
  console.log(`${language}, ${this.name}${punctuation}`);
}

const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

greet.call(person1, "Hello", "!"); // Hello, Alice!
greet.apply(person2, ["Hi", "!!"]); // Hi, Bob!!
const greetAlice = greet.bind(person1, "Hey");
greetAlice("..."); // Hey, Alice...