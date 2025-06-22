let typeString = 'javascript'
let typeNumber = 25
let typeBoolean = true
let typeUndefined = undefined
let typeNull = null
let typeArray = [2, 4, 6] 
let typeObject = {name: 'Name'}
let typeSymbol = Symbol("id")

console.log(typeof typeString); // "string"
console.log(typeof typeNumber); // "number"
console.log(typeof typeBoolean); // "boolean"
console.log(typeof typeUndefined); // "undefined"
console.log(typeof typeNull); // "object"
console.log(typeof typeArray); // "object"
console.log(typeof typeObject); // "object"
console.log(typeof typeSymbol); // "symbol"

//2
/*
  Объяснение ссылочных типов данных простыми словами.
  У меня есть страница GitHub, куда я отправляю коммиты с изменениями кода. Если я отправлю ссылку ментору1, он будет видеть все изменения, которые я вношу. Если я отправлю ссылку ментору2, он также будет видеть. Если ментор1 отправит эту же ссылку ментору2, они оба будут наблюдать коммиты. Если я добавлю новый коммит, то у обоих менторов обновится информация по ссылке.
  Если ментор2 внесет свои изменения в мой проект (обусловимся, что у нас общий доступ к проекту), ментор1 и я увидим изменения.
*/