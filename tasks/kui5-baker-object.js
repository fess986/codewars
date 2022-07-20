// Pete, the baker
// подсчет количества пирогов, которые можно испечь из заданных ингредиентов 

function cakes(recipe, available) {
    minCakes = []; // массив в который мы будем количество тортов, которые можно сделать из каждого ингредиента
    for (let key in recipe) {
        if (!available[key]) { // если такого ингредиента нет, то сразо прописываем 0 тортов и выходим из цикла
            minCakes.push(0);
            break;
        }
        minCakes.push(Math.floor(available[key] / recipe[key]));
    }
    return Math.min(...minCakes) // минимально можно сделать тортов - это минимум для каждого ингредиента
}

console.log(cakes({
    flour: 100,
    sugar: 200,
    eggs: 1
}, {
    flour: 1200,
    sugar: 1200,
    eggs: 5,
    milk: 200
}))



// лучшее решение
// function cakes(recipe, available) {
//     debugger;
//     return Object.keys(recipe).reduce(function (val, ingredient) {
//         return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)  // сравниваем инфинити и кол-во, которое можно спечь из этого ингредиента 
//     }, Infinity)   
// }

