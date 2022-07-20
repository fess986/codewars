// KUI-6 THE SUPERMARKET QUEUE
// ОЧЕРЕДЬ В СВОБОДНЫЕ КАССЫ

function queueTime(customers, n) {
    let tillsArray = new Array(n).fill(0); // создаем массив касс с начальным временем 0
    customers.map(item => { // по очереди добавляем значения в кассу с минимальным значением
        tillsArray[tillsArray.indexOf(Math.min(...tillsArray))] = tillsArray[tillsArray.indexOf(Math.min(...tillsArray))] + item
    });
    return Math.max(...tillsArray);
}