//1
function sumArray(arr, index = 0) {
  if (index === arr.length) {
    return 0;
  }
  return arr[index] + sumArray(arr, index + 1);
}
console.log(sumArray([1, 2, 3, 4, 5])); // 15

//2
function maxArray(arr, index = 0) {
  if (index === arr.length - 1) {
    return arr[index];
  }
  const currentMax = maxArray(arr, index + 1);
  return arr[index] > currentMax ? arr[index] : currentMax;
}
console.log(maxArray([1, 5, 3, 9, 2])); // 9

//3
function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
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

const original = { a: 1, b: { c: 2 } };
const copied = deepCopy(original);
copied.b.c = 3;
console.log(original.b.c); // 2, так как копия не влияет на оригинал

//4
function fibonacci() {
  const cache = {};

  function fib(n) {
    if (n in cache) {
      return cache[n];
    }

    if (n <= 1) {
      return n;
    }

    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  }

  return fib;
}

const fib = fibonacci();
console.log(fib(6)); // 8 - вычисляется
console.log(fib(6)); // 8 - берется из кэша
