// kui-6 Sort the odd
// сортируем нечетные цифры в массиве, при этом четные остаются на местах

function sortArray(array) {
    console.log(array);
    let i = -1;
    let oddArray =  array.filter((a) => (a % 2 !== 0)).sort((a,b) => a-b);  //создаем новый массив отсортированных нечетных цифр
    let array2 = array.map((item) => {
        if (item % 2 ===0) return item  // если цифра четная - оставляем изначальную из array
     else { // если нечет - то добавляем по очереди из массива нечетных
        i++;
        return oddArray[i];
    }}
  
    )
    return array2;
  }
  
  console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])) //[1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
  
  // лучшее решение по сути такое же, только короче - с тернарным оператором