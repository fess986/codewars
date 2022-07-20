// kui-6 Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!

function isPowArray(arr) { //проверяем массив 
    let sum = arr.reduce((calc, item, index) => calc + Math.pow(item, index + 1), 0)
    if (sum == arr.join('')) return true
    else return false
}

function sumDigPow(a, b) {
    let arrNumbers = [];
    for (let i = a; i < b; i++) {
        if (isPowArray(i.toString().split(''))) arrNumbers.push(i)
    }
    return arrNumbers
}