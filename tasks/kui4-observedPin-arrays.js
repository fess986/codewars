// ЗАДАЧА РАЗРЯДА KUI 4
// НУЖНО ПОДОБРАТЬ ВСЕ ВОЗМОЖНЫЕ ВАРИАНТЫ ПИН-КОДОВ, С УЧЕТОМ ВОЗМОЖНОЙ ПОГРЕШНОСТИ. ПОГРЕШНОСТЬ ДЛЯ КАЖДОЙ ЦИФРЫ ПРЕДСТАВЛЕНА В ОБЪЕКТЕ NUMBERSNEAR

function getPINs(observed) {  // observed - возможный пин(подсмотренный), от которого мы отталкиваемся
  const numbersNear = {     // объект вероятных значений пин кода
    0 : [0, 8],
    1 : [1, 2, 4],
    2 : [1, 2, 3, 5],
    3 : [2, 3, 6],
    4 : [1, 4, 5, 7],
    5 : [2, 4, 5, 6, 8],
    6 : [3, 5, 6, 9],
    7 : [4, 7, 8],
    8 : [5, 7, 8, 9, 0],
    9 : [6, 8, 9],
  };
  

  // создаем массив, состоящий из массивов вероятных значений каждого разряда пин-кода
  let observedArr = observed
    .split('')
    .map((number) => {   
      let arrObs = numbersNear[number];
      console.log(arrObs)
      return arrObs })
    //console.log(observedArr)

    // перебираем все возможные варианты и складываем их в accum
    let arr = observedArr
    .reduce((accum, item) => {  // обрабатываем каждый подмассив и приклеиваем его к уже сформированному
      return item.reduce((accum2, item2) => {  // проходим по каждому эл-ту подмассива
        return accum2.concat(accum.map((item3) => {
          return item3.toString() + item2.toString()}));  // приклеиваем каждую цифру из посследущего массива значений item к уже сформированному массиву accum
      }, []);  // массив accum2
    }, ['']);  // складываем всё в массв строк accum

    return arr;
}

console.log(getPINs("103"))
