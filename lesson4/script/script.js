"use strict";

/*
1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, 
в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: 
{‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/


let objNum = {
    number: +prompt('Введите число от 0 до 999'),
    units: 0,
    dozens: 0,
    hundreds: 0,
}

const convertNumber = () => {

    if (objNum.number < 0 || objNum.number > 999) {
        console.log('Вы ввели число за диапазоном 0 - 999')
    } else if (objNum.number <= 9) {
        objNum.units = objNum.number
    } else if (objNum.number <= 999) {
        objNum.units = Math.floor(objNum.number % 10)
        objNum.dozens = Math.floor(objNum.number / 10 % 10)
        objNum.hundreds = Math.floor(objNum.number / 100 % 10)
    }
    console.log(
        "Число: " + objNum.number + "\r\n",
        "Единицы: " + objNum.units + "\r\n",
        "Десятки: " + objNum.dozens + "\r\n",
        "Сотни: " + objNum.hundreds + "\r\n"
    )
}

convertNumber();


/*
2. Правила игры:
Компьютер задумывает четыре различные цифры из 0,1,2,...9. Игрок делает ходы, чтобы узнать эти цифры и их порядок. 
Каждый ход состоит из четырёх цифр, 0 может стоять на первом месте. В ответ компьютер показывает число отгаданных цифр, 
стоящих на своих местах (число быков) и число отгаданных цифр, стоящих не на своих местах (число коров).
Пример:
Компьютер задумал 0834. Игрок сделал ход 8134. Компьютер ответил: 2 быка (цифры 3 и 4) и 1 корова (цифра 8).
 */

const getNum = () => {
    let number = []

    while (number.length < 4)  {
        let newNum = Math.floor(Math.random() * 10);
        if (number.indexOf(newNum) < 0) {
            number.push(newNum)
        }
    }
    return number;
}

//console.log(getNum());

const guessNum = () => {
    let enterNum = +prompt("Введи 4 цифры от 0 до 9")
    let arr = []

    for (let i = 0; i < 4; i++) {
        let enterNumArr = parseInt(enterNum.toString().substr(i,  1))
        arr.push(enterNumArr)        
    }
    check(arr)
    console.log(arr)    
}

guessNum()

function check (num) {

    let animal = {
        bulls:  0,
        cows: 0,        
        guessedNum: getNum(),
    }

    for (let i = 0; i < 4; i++) {        
        if (num[i] == animal.guessedNum[i]) {
            animal.bulls++
        } else if (animal.guessedNum.toString().indexOf(num[i]) >=  0) {
            animal.cows++
        }
    }    
    console.log(animal.guessedNum)
    console.log("Быки " + animal.bulls)
    console.log("Коровы " + animal.cows)    
}