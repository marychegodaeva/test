//3
function createPhoneNumber(digits) {
  let str = digits.toString();
  if (str.length < 9) {    // Дополняем ведущими нулями
    str = str.padStart(9, '0');
  }
  return `8 (${str.substring(0, 3)}) ${str.substring(3, 6)}-${str.substring(6)}`;
}

console.log(createPhoneNumber(990755333)); // 8 (990) 755-333
console.log(createPhoneNumber(9907333)); // 8 (009) 907-333

//5
function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const array = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(array)); // [11, 12, 22, 25, 34, 64, 90]