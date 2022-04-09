// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
let i = 2;
while(i <= 100) {
   let cnt = 0;
   let del = 2;
    while(del < i){
        if (i%del == 0) {
            cnt++;
        }
        del++;
    }
    if (cnt == 0) {
        console.log(`${i} - простое число`);
    }
    i++;
}

/*
2. С этого урока начинаем работать с функционалом интернет-магазина.
   Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины
   в зависимости от находящихся в ней товаров.
3. Товары в корзине хранятся в массиве. Задачи:
    a. Организовать такой массив для хранения товаров в корзине;
    b. Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/

const basket = [
    {name: 'product1', price: 10, quantity: 4},
    {name: 'product2', price: 5, quantity: 2},
    {name: 'product3', price: 15, quantity: 1},
    {name: 'product4', price: 2, quantity: 3}
];


function countBasketPrice(basket){
   return  basket.reduce((acc,product) => {return product.price * product.quantity + acc},0);
}

console.log(`общая сумма корзины: ${countBasketPrice(basket)}`);

/*
4. * Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
for(...){// здесь пусто}
*/

for (let i = 0; i <= 9;console.log(i++) ){}


/*
5. * Нарисовать пирамиду с 20 рядами с помощью console.log, как показано на рисунке:
x
xx
xxx
xxxx
xxxxx
*/
let str  = 'x';
for (let i = 0; i < 20; i++){
    console.log(str)
    str += 'x';
}