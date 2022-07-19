//KUI-6 HIGHEST SCORING WORD
// ПОИСК СЛОВА С НАИБОЛЬШИМ ВЕСОМ . А=1, B=2, C=3 И ТД

function high(x) {
    let xArray = x.split(' ');
    let weightArray = xArray.map((elem) => {  // массив веса слов
        let word = elem.split('');
        let wordNumbers = word.map(item => item.codePointAt(0) - 96); // считаем на основании кодировки
        let wordNumbers2 = wordNumbers.reduce((a, b) => a + b);
        return wordNumbers2
    })
    console.log(weightArray)
    let iMax = 0;
    let max = weightArray[0]; // берем первый элемент массива
    for (var i = 0; i < weightArray.length; i++) { // переберем весь массив
        // если элемент больше, чем в переменной, то присваиваем его значение переменной
        if (max < weightArray[i]) {
            max = weightArray[i];
            iMax = i;
        }
    }
    return xArray[iMax]
}


// лучшее решение схоже с моим, только гораздо короче и поиск идет при помощи интересной конструкции as.indexOf(Math.max(...as))
function high(s){
    let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
    return s.split(' ')[as.indexOf(Math.max(...as))];
  }