//1
function outerFunction() {
  const outerVariable = "I am from the outer function";
  function innerFunction1() {
    console.log(outerVariable);
  }
  return innerFunction1;
}

const myInnerFunction1 = outerFunction();
myInnerFunction1(); // I am from the outer function

//2
function outerFunction() {
  const outerVariable = "I am from the outer function";
  function middleFunction() {
    const middleVariable = "I am from the middle function";
    function innerFunction() {
      const innerVariable = "I am from the inner function";
      console.log(outerVariable);
      console.log(middleVariable);
      console.log(innerVariable);
    }
    return innerFunction;
  }
  return middleFunction;
}

const myMiddleFunction = outerFunction();
const myInnerFunction = myMiddleFunction();
myInnerFunction();
/*
I am from the outer function
I am from the middle function
I am from the inner function
*/

//3
function createFibonacciCalculator() {
  const cache = {}; 

  return function fibonacci(n) {
    if (n in cache) {
      return cache[n]; // Возвращаем значение из кэша, если оно уже было вычислено
    }
    let result;
    if (n === 0) {
      result = 0;
    } else if (n === 1) {
      result = 1;
    } else {
      let a = 0, b = 1;
      for (let i = 2; i <= n; i++) {
        const c = a + b;
        a = b;
        b = c;
      }
      result = b;
    }
    cache[n] = result; // Сохраняем вычисленное значение в кэш
    return result;
  };
}

const fibonacci = createFibonacciCalculator();
console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(5)); // 5
console.log(fibonacci(10)); // 55
console.log(fibonacci(50)); // 12586269025