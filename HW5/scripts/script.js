console.log("Первая часть домашнего задания")

let inputNum = prompt ("Введите число :")
console.log("10% от введеного числа будет:"+inputNum*0.1)

console.log("-------------------------------------")

console.log("Вторая часть домашнего задания")

inputNum = prompt ("Введите 1-e число :")
let inputNum1 = prompt ("Введите 2-e число :")
if (inputNum > inputNum1) ( 
        console.log("Меньшее число :"+inputNum1))
    else ( 
        console.log("Меньшее число :"+inputNum))

console.log("-------------------------------------")

console.log("Третья часть домашнего задания")
inputNum = prompt ("Введите число :")
if (inputNum < 100) (
        console.log("Наше число меньше 100 ")) 
    else if (inputNum > 100) 
            (console.log("Наше число больше 100 ")) 
                else (console.log("Наше число равно 100 "))

console.log("-------------------------------------")

console.log("Четвертая часть домашнего задания")
inputNum = prompt ("Как Вас зовут? ")
inputNum1 = prompt ("Сколько тебе лет "+ inputNum)
if (inputNum1 < 18) (console.log ("Hi, "+inputNum))
    else (console.log ("Hello, "+inputNum))

