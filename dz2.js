/*
1. Почему код дает именно такие результаты?
Ответ: потому что, i++ сначала возвращает значение, потом увеличивает переменную, а ++i сначала увеличивает значение, потом возвращает.
2. Чему будет равен x?
Ответ: x = 5 т.к. по приоритету операций сначала выполняется действие в скобках
*/

/*
 3. Объявить две целочисленные переменные — a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму;
*/

let a = -5;
let b = -10;

if ( a > 0 && b > 0) console.log(a - b);
else if ( a < 0 && b < 0) console.log(a * b);
else console.log(a + b);

/*
4. Присвоить переменной а значение в промежутке [0..15].
С помощью оператора switch организовать вывод чисел от a до 15.
*/

a = 5;
switch (a){
    case 0:
        console.log(0);
    case 1:
        console.log(1);
    case 2:
        console.log(2);
    case 3:
        console.log(3);
    case 4:
        console.log(4);
    case 5:
        console.log(5);
    case 6:
        console.log(6);
    case 7:
        console.log(7);
    case 8:
        console.log(8);
    case 9:
        console.log(9);
    case 10:
        console.log(10);
    case 11:
        console.log(11);
    case 12:
        console.log(12);
    case 13:
        console.log(13);
    case 14:
        console.log(14)
    case 15:
        console.log(15)
}


/*
5. Реализовать четыре основные арифметические операции в виде функций с двумя параметрами.
Обязательно использовать оператор return.
*/

function pls(x, y) {
    return x + y;
}

function mns(x, y) {
    return x - y;
}

function div(x, y) {
    return x / y;
}

function mul(x, y) {
    return x * y;
}

/*
6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 — значения аргументов, operation — строка с названием операции.
В зависимости от переданного значения выполнить одну из арифметических операций
(использовать функции из пункта 5) и вернуть полученное значение (применить switch).
*/

function mathOperation(arg1, arg2, operation){
    switch (operation) {
        case '+':
            return pls(arg1, arg2);
        case '-':
            return mns(arg1, arg2);
        case '/':
            return div(arg1, arg2);
        case '*':
            return mul(arg1, arg2);
    }
}

console.log(mathOperation(1, 2, '+'));
console.log(mathOperation(1, 2, '-'));
console.log(mathOperation(1, 2, '/'));
console.log(mathOperation(1, 2, '*'));
