// KUI-6 SPLIT STRINGS
// РАЗБИТИЕ СТРОКИ НА ПАРЫ СИМВОЛОВ С ДОБАВЛЕНИЕМ _ - В СЛУЧАЕ НЕЧЕТА

function solution(str){
    if (str.length < 1) return []
    if (str.length % 2 !== 0) str = str + '_'
    return str.match(/../g)
  }