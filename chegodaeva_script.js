//1
function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[^a-zA-Z0-9а-яА-Я]/g, '');
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

console.log(isPalindrome("А роза упала на лапу Азора")); // true
console.log(isPalindrome("Привет")); // false

//2
function findShortestWord(sentence) {
  const words = sentence.split(' ');
  let shortestWord = words[0];
  for (const word of words) {
    if (word.length < shortestWord.length) {
      shortestWord = word;
    }
  }
  return shortestWord;
}
console.log(findShortestWord("Это самое короткое слово")); // Это

//3
function createPhoneNumber(digits) {
  const str = digits.toString();
  return `8 (${str.substring(0, 3)}) ${str.substring(3, 6)}-${str.substring(6)}`;
}
console.log(createPhoneNumber(990755333)); // 8 (990) 755-333

//4
function findMinAndMax(arr) {
  let min = arr[0];
  let max = arr[0];
  for (const num of arr) {
    if (num < min) min = num;
    if (num > max) max = num;
  }
  return { min, max };
}
console.log(findMinAndMax([3, 1, 4, 1, 5, 9, 2, 6])); // { min: 1, max: 9 }