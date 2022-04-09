/*
1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999,
   надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы,
   десятки и сотни. Например, для числа 245 надо получить следующий объект:
   {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее
   сообщение с помощью console.log и вернуть пустой объект.
*/

function numberToObject(num){
    if (num > 999){
        console.log(`Ошибка: переданное число ${num} больше 999`);
        return  {};
    }
    let units = num  % 10;
    num = (num - units) / 10
    let tens = num  % 10;
    num = (num - tens) / 10
    let hundreds = num  % 10;
    return {'единицы': units, 'десятки': tens, 'сотни': hundreds};
}

console.log(numberToObject(321))
console.log(numberToObject(1000))

/*
2. Продолжить работу с интернет-магазином:
    a. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
    b. Реализуйте такие объекты.
    c. Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/

const basket = {
    products: [
        {name: 'product1', price: 10, quantity: 4},
        {name: 'product2', price: 5, quantity: 2},
        {name: 'product3', price: 15, quantity: 1},
        {name: 'product4', price: 2, quantity: 3}
    ],
    totalPrice: function () {
        return this.products.reduce((acc, product) => {
            return product.price * product.quantity + acc}, 0);
    }
};

console.log(`общая сумма корзины: ${basket.totalPrice()}`);