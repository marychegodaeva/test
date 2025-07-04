//1
function safeDivide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Деление на ноль невозможно");
    }
    return a / b;
  } catch (error) {
    console.error(error.message);
  }
}
safeDivide(10, 2); // 5
safeDivide(10, 0); // Деление на ноль невозможно

//2
function transformJSON(jsonString) {
  try {
    const obj = JSON.parse(jsonString);
    return obj;
  } catch (error) {
    console.error("Ошибка при парсинге JSON:", error.message);
  }
}

transformJSON('{"name": "Alice", "age": 25}'); // {name: "Alice", age: 25}
transformJSON('{invalid json}'); // Ошибка при парсинге JSON: Unexpected token i in JSON at position 1

//3
function checkAccess(age) {
  try {
    if (age < 18) {
      throw new Error("Доступ запрещен");
    }
    console.log("Доступ разрешен");
  } catch (error) {
    console.error(error.message);
  }
}

checkAccess(20); // Доступ разрешен
checkAccess(16); // Доступ запрещен