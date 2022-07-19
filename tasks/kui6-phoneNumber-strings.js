// kui-6 Create Phone Number
// нужно собрать введенный номер телефона по шаблону "(123) 456-7890"

// ставлю каждую цифру на свое место при помощи синтаксиса ``
function createPhoneNumber(numbers){
    return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
  }

  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));


// в лучших решениях - сборка по шаблону с заменой каждого очередного значения x - очередным значением входного массива через функцию replace
//   function createPhoneNumber(numbers){
//     var format = "(xxx) xxx-xxxx";
//     for(var i = 0; i < numbers.length; i++)
//     {
//       format = format.replace('x', numbers[i]);
//     }
//     return format;
//   }
