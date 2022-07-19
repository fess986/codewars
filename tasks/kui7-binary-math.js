// KUI-7 BINARY ADDITION
// ЗАДАЧА СЛОЖИТЬ 2 ЧИСЛА И ПЕРЕВЕСТИ ИХ В ДВОИЧНУЮ СИСТЕМУ

// рушается при помощи метода toString(2) - где (2) - это система счисления
function addBinary(a,b) {
    let c = a + b;
    return c.toString(2);
  }