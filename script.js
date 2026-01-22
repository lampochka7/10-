// 10 задач по типам данных JavaScript

// 1. let x; Выведите typeof x.
let x;
console.log(typeof x); // "undefined"

// 2. Выведите typeof 10 и typeof "10".
console.log(typeof 10);     // "number"
console.log(typeof "10");   // "string"

// 3. Выведите typeof true и typeof false.
console.log(typeof true);   // "boolean"
console.log(typeof false);  // "boolean"

// 4. Что выведет typeof null? (ответ словом | текстом)
console.log(typeof null);   // "object"

// 5. Что выведет: "15" + 1 ?
console.log("15" + 1);      // "151"

// 6. Что выведет: "12" - 1 ?
console.log("12" - 1);      // 11

// 7. Что выведет: Boolean("") ?
console.log(Boolean(""));   // false

// 8. Что выведет: Boolean(" ") ?
console.log(Boolean(" "));  // true

// 9. Преобразуйте " 13 " в число (одной строкой).
console.log(+ " 13 ".trim() || parseInt(" 13 ", 10));  // 13

// 10. Напишите функцию isNumber(v), чтобы возвращало true только для чисел и false для NaN.
function isNumber(v) {
  return typeof v === 'number' && !Number.isNaN(v);
}

console.log(isNumber(42));        // true
console.log(isNumber(NaN));       // false
console.log(isNumber("42"));      // false
console.log(isNumber(null));      // false
