//1
function even(num) {
  if (num > 0) {
    return 'Число положительное';
  } 
  else if (num === 0) {
    return 'Число равно нулю';
  }
  else if (num < 0)  {
    return 'Число отрицательное';
  }
}

console.log(even(2)) // Число положительное
console.log(even(0)) // Число равно нулю
console.log(even('0')) // Число равно нулю
console.log(even(-8)) // Число отрицательное

//2
let height = prompt('Введите Ваш рост в см') * 0.01;
let weight = prompt('Введите Ваш вес в кг');

function calculateIMT(h, w) {
  let imt = (w / (h * h));

  if (imt < 16) {
    return 'У Вас выраженный дефицит массы тела';
  }
  else if (imt >= 16 && imt < 18.5) {
    return 'У Вас недостаточная (дефицит) масса тела';
  }
  else if (imt >= 18.5 && imt < 25) {
    return 'У Вас нормальная масса тела';
  }
  else if (imt >= 25 && imt < 30) {
    return 'У Вас избыточная масса тела (предожирение)';
  }
  else if (imt >= 30 && imt < 35) {
    return 'У Вас ожирение первой степени';
  }
  else if (imt >= 35 && imt < 40) {
    return 'У Вас ожирение второй степени';
  }
  else if (imt >= 40) {
    return 'У Вас ожирение третьей степени (морбидное)';
  }
}

alert(calculateIMT(height, weight));