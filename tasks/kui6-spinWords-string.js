// KUI-6 STOP GNINNIPS MY SDROW!
// ЗАДАЧА ПЕРЕВЕРНУТЬ ВСЕ СЛОВА ДЛИННЕЕ 5 СИМВОЛОВ В ЗАДАННОЙ СТРОКЕ

// функция для переворота отдельного слова задом-наперед. Когда писал - не знал, что есть уже готовая reverse()
function spinWorld(str) {
    let strArray = str.split('')
    let revers = []
    for (let i = str.length; i > -1; i--) {
        revers.push(strArray[i])
    }
    return revers.join('')
}

function spinWords(string) {
    return string.split(' ').map((world) => {  //разбиваем строку по пробелам и складываем новую в зависимости от длинны каждого слова
        let string = '';
        if (world.length < 5) {  // компактнее было бы через тернарный оператор
            string = string + world
        } else {
            string = string + spinWorld(world)
        }
        return string
    }).join(' ')
}

console.log('Hey fellow warriors');

// в лучшей практике используется метод reverse() для массивов

// function spinWords(words){
//     return words.split(' ').map(function (word) {
//       return (word.length > 4) ? word.split('').reverse().join('') : word;
//     }).join(' ');
//   }