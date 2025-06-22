//1
num = 2
function even(num) {
  if (num > 0) {
    return 'Число положительное';
  } 
  else if (num == 0) {
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
  else if (imt >= 16 & imt < 18.5) {
    return 'У Вас недостаточная (дефицит) масса тела';
  }
  else if (imt >= 18.5 & imt < 25) {
    return 'У Вас нормальная масса тела';
  }
  else if (imt >= 25 & imt < 30) {
    return 'У Вас избыточная масса тела (предожирение)';
  }
  else if (imt >= 30 & imt < 35) {
    return 'У Вас ожирение первой степени';
  }
  else if (imt >= 35 & imt < 40) {
    return 'У Вас ожирение второй степени';
  }
  else if (imt >= 40) {
    return 'У Вас ожирение третьей степени (морбидное)';
  }
}

alert(calculateIMT(height, weight));

//3
function getMonthName(monthNumber) {
  let monthName;

  switch (monthNumber) {
    case 1:
      monthName = "Январь";
      break;
    case 2:
      monthName = "Февраль";
      break;
    case 3:
      monthName = "Март";
      break;
    case 4:
      monthName = "Апрель";
      break;
    case 5:
      monthName = "Май";
      break;
    case 6:
      monthName = "Июнь";
      break;
    case 7:
      monthName = "Июль";
      break;
    case 8:
      monthName = "Август";
      break;
    case 9:
      monthName = "Сентябрь";
      break;
    case 10:
      monthName = "Октябрь";
      break;
    case 11:
      monthName = "Ноябрь";
      break;
    case 12:
        monthName = "Декабрь";
        break;
    default:
      monthName = "Некорректный номер месяца";
  }
  return monthName;
}

let monthNumber = parseInt(prompt('Введите номер месяца:'), 10);
let monthName = getMonthName(monthNumber);
alert(`Месяц: ${monthName}`);

//4
function getDrinkType(drinkNumber) {
  let drink;

  switch (drinkNumber) {
    case 1:
      drink = "Вода";
      break;
    case 2:
      drink = "Чай";
      break;
    case 3:
      drink = "Кофе";
      break;
    default:
      drink = "Неизвестный напиток";
  }
  return drink;
}

let drinkNumber = 2;
let drinkType = getDrinkType(drinkNumber);
alert(`Вы выбрали: ${drinkType}`);