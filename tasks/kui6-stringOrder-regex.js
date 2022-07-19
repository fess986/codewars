// KUI-6 YOUR ORDER, PLEASE
// сортировка в порядке чисел, содержищихся в слове

function order(words){
    let arrWords = words.split(' ');
    arrWords.sort((a,b) => a.match(/\d/)[0] - b.match(/\d/)[0]);
    wordsSorted = arrWords.join(' ')
    return wordsSorted
  }

  