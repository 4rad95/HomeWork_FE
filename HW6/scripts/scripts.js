console.log(" ------------------ Первое задание -----------------")

    // Если я правильно понял задачу то "Выводим каждый второй элимент
    // Из нашего ряда i : 0,1,2,3,4,5....10. 0 - первый, 1 - второй, 2- первый, 3-второй и т.д. 
    // соответственно выводим 1,3,5.....

    for (let i=1; i<=10;i+=2) {
        console.log(`Число : ${i}`)
    }

  

 console.log(" ------------------ Второе  задание -----------------")
 
    for (let i=55; i>=20;i--) {
        console.log(`Число : ${i}`)

    }
console.log(" ------------------ Третье  задание -----------------")

    const numbers = [3, 5, 11, 2, 8, 1, 6];
    let numbers_squared=[]
    for (let i=0; i<numbers.length;i++)
        {
            numbers_squared.push(numbers[i]**2)
       }
    console.log(` Полученый масив : ${numbers_squared}`)     

console.log(" ------------------ Четвертое  задание -----------------")

    let last_elem=numbers_squared[numbers_squared.length-1]
    console.log(` Полученая переменая : last_elem = ${last_elem}`)     

console.log(" ------------------ Пятое  задание -----------------")

    const user = {
        first_name: 'Ivan', 
        last_name: 'Ivanov', 
        age: 20, 
        salary: 500
        }
    console.log(`User’s name is ${user.first_name} ${user.last_name}. He is ${user.age} years old`)

console.log(" ------------------ Все! До новых встреч! -----------------")
