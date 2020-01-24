"use strict";

/*
1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100
*/
let a = 1;
let arr = [];

while (a <= 100) {
    if (a == 1) {
        arr.push(1)
    } else {
        let result = 2;
        let i = 2;
        while (a % i !== 0) {
            i++;            
            result++;
        }
        if (result == a) {
            arr.push(result);
        }
    }
    a++;
}

console.log(arr);

/*
4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
for(…){// здесь пусто}
*/

for (let i = 0; i < 9; i++, console.log(i)) {   
    
}

/**
4) *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx
 */

let pyramid = [];
let b = 0;
while (b < 20){
    b++;
    pyramid.push('x');
    console.log(pyramid);
}