//1 
for (let num = 1; num <= 10; num++) {
  console.log(num);
}

//2
let sum = 0;
let n = 1;

while (n <= 100) {
  sum += n;
  n++;
}

console.log(sum, '\n') // 5050

//3
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

for (let n = 0; n <= 100; n++) {
  if (isPrime(n)) {
    console.log(n);
  }
}
