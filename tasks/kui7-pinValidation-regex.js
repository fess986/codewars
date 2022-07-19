// KUI-7 REGEX VALIDATE PIN CODE
// ВАЛИДАЦИЯ ВХОДЯЩЕГО ПИН КОДА. НУЖЕН 4 ИЛИ 6 ЦИФР.

function validatePIN(pin) {
    //return true or false
    let regExp = /\d/g;  // регулярка - достаём отдельные одиночные цифры

    console.log(pin.match(regExp))

    if (!pin.match(regExp)) {   // проверка есть ли вообще хоть одно значение 
        return false
    }

    if (pin.match(regExp).length === 0) {  // проверка есть ли хоть одна цифра
        return false
    }

    if (pin.match(regExp).join('').length !== pin.length) {  // проверка совпадения общего количества цифр и количества всех символов
        return false
    }

    if ((pin.length === 4) || (pin.length === 6)) {
        return true
    } else {
        return false
    }
}

console.log(validatePIN('342a'))  // false
console.log(validatePIN('342634'))  // true

// лучшая практика
// function validatePIN(pin) {
//     return /^(\d{4}|\d{6})$/.test(pin)  // ^ - начало строки, $ - конец строки, d{4}|\d{6}  - ищем или подряд идущие 4 цифры или 6 цифр 
//   }