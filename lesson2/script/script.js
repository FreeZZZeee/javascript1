"use strict";

/*
1. Дан код:

let a = 1, b = 1, c, d
c = ++a; alert(c)            2 
d = b++; alert(d)            1 
c = (2+ ++a); alert(c)       5 
d = (2+ b++); alert(d)       4 
alert(a)                     3 
alert(b)                     3 

 Почему код даёт именно такие результаты?

 1. Префикс возвращает и записывает новое значение
 2. Постфикс возвращает старое значение, а записывает новое
 3. Потому что выше уже a была увеличена на два раза на 1
 4. b++ вернул 2
 5. a была увеличена 3 раза на 1
 6. b была увеличена 3 раза на 1
 */

/*
 2. Чему будет равен x в примере ниже?

let a = 2
let x = 1 + (a *= 2)
console.log(x)

(a *= 2) === 4
x = 1 + 4 === 5
*/

/* 
3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.


let a = +prompt("Введите число a", 4), b = +prompt("Введите число b", 5)

if ((a >= 0) && (b >= 0)) {
    console.log (a - b)
} else if ((a < 0) && (b < 0)) {
    console.log (a * b)
} else if ((a < 0) || (b < 0)) {
    console.log (a + b)
}
*/

/* 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

let a = +prompt("Введите число от 0 до 15")

switch (a) {
    case 0:
        console.log(a++) 
    case 1:
        console.log(a++)         
    case 2:
        console.log(a++)         
    case 3:
        console.log(a++)         
    case 4:
        console.log(a++)         
    case 5:
        console.log(a++)         
    case 6:
        console.log(a++)         
    case 7:
        console.log(a++)         
    case 8:
        console.log(a++)         
    case 9:
        console.log(a++)         
    case 10:
        console.log(a++)         
    case 11:
        console.log(a++)         
    case 12:
        console.log(a++)         
    case 13:
        console.log(a++)         
    case 14:
        console.log(a++)
    case 15:
        console.log(a++)         
        break;                                                                                                                                                                                                                                                                                                                                                                    
    default:
        console.log("Вы ввели неправильное число.")
        break;
}
*/

/* 
5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
*/

const subtraction = (a, b) => {
    return a - b
}

const addition = (a, b) => {
    return a + b
}

const division = (a, b) => {
    return a / b
}

const multiplication = (a, b) => {
    return a * b
}

/*
6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции.
В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
*/

const mathOperation = (arg1, arg2, operation) => {
    switch (operation) {
        case "subtraction":
            return  subtraction(arg1, arg2)
            break;
        case "addition":
            return addition(arg1, arg2)
            break;
        case "division":
            return division(arg1, arg2)
            break;
        case "multiplication":
            return multiplication(arg1, arg2)
            break;
    }
}

console.log(mathOperation(5, 2, "subtraction"));
console.log(mathOperation(5, 2, "addition"));
console.log(mathOperation(5, 1, "division"));
console.log(mathOperation(5, 1, "multiplication"));

/*
 7. *Сравнить null и 0. Попробуйте объяснить результат.

console.log(null == 0) false т.к. null == undefined т.е. ни чему
*/

// 8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.

const power = (val, pow) => {
    if (pow == 1) {
        return val;
      } else {
        return val * power(val, pow - 1);
      }
}

console.log(power(3, 3))