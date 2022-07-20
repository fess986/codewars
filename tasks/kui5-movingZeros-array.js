// KUI-5 MOVING ZEROS TO THE END
// добавление нулей в конец полученного массива

function moveZeros(arr) {
    let spliceArr = [];
    arr.forEach((item) => {  // добавляем по порядку элементы в новый массив
        if (item !== 0) {
            spliceArr.push(item);
        }
    })
    let numberZero = arr.length - spliceArr.length; 
    for (let i = 0; i < numberZero; i++) {  // добавляем нули
        spliceArr.push(0)
    }
    return spliceArr
}