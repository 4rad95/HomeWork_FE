console.log(" ------------------ Первое задание -----------------")

    for (let i=1; i<10;i+=2) {
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
