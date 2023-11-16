{
const RazdElem = document.createElement("p") 
RazdElem.innerText = "---------------------------------------------- Первая задача --------------------------------------------"
document.body.append(RazdElem)
}

{

const newDiv = document.createElement("div")
newDiv.className = "numbers"
document.body.append(newDiv)

for(let i = 100; i >50; i-=10) {
  console.log(i); 
  const newPElem = document.createElement("p") // <p></p>
  newPElem.innerText = i // <p>i</p>
  newDiv.append(newPElem)
}
}


{
    const RazdElem = document.createElement("p") 
    RazdElem.innerText = "---------------------------------------------- Вторая задача --------------------------------------------"
    document.body.append(RazdElem)
 }
   
{
const newDiv = document.createElement("div")
newDiv.className = "string_container"
document.body.append(newDiv)

const rootDiv = document.querySelector("#root")

const strArray = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit.", "Nam", "perferendis", "debitis", "reiciendis", "enim", "rerum", "animi", "vero", "obcaecati", "fuga"]

for(let i = 0; i < strArray.length; i++) {
  console.log(i); 
  const newPElem = document.createElement("p") 
  newPElem.innerText = strArray[i] 
  newDiv.append(newPElem)
}
}
{
    const RazdElem = document.createElement("p") 
    RazdElem.innerText = "---------------------------------------------- Третья задача --------------------------------------------"
    document.body.append(RazdElem)
 }
   
{
    const arrObj=[
{   first_name:"Ivan",
    last_name:"Ivanov",
    age: 70,},
{   first_name:"Petr",
    last_name:"Petrov",
    age: 65,},
{   first_name:"Sergey",
    last_name:"Sergeyev",
    age: 55,}    ,
{   first_name:"Joe",
    last_name:"Togechelovek",
    age: 15,}    
    ]

    const newDiv = document.createElement("div")
    newDiv.className = "users_container"
    document.body.append(newDiv)
for (let i=0;i<arrObj.length;i++)
    {   
        if (arrObj[i].age>=16) {
            const newDivElem = document.createElement("div") 
            newDivElem.innerText = ` Имя: ${arrObj[i].first_name}, Фамилия : ${arrObj[i].last_name}  Возраст : ${arrObj[i].age } лет`
            newDiv.append(newDivElem)          
        }

    }

}
{
    const RazdElem = document.createElement("p") 
    RazdElem.innerText = "---------------------------------------------- Второстепеные задачи - 1-------------------------------------------"
    document.body.append(RazdElem)
 }

//Второстепенные задачи:
// 1 - Рассматривать кейс, в котором создается div с картинкой и ссылкой внутри.
{
const newDiv = document.createElement("div")
newDiv.className = "img_container"
document.body.append(newDiv)

const newImgElem = document.createElement("img")
newImgElem.src ="https://1gai.ru/uploads/posts/2020-11/1605019928_12.jpg"

const newAElem   = document.createElement("a") 
newAElem.innerHTML = '<br> <a style="color: green;" href="https://tel-ran.de/" target="_blank">Tel-ran</a>'
newDiv.append(newImgElem, newAElem)


{
    const RazdElem = document.createElement("p") 
    RazdElem.innerText = "---------------------------------------------- Второстепеные задачи - 2-------------------------------------------"
    document.body.append(RazdElem)
 }

// 2 - Создать функцию, которая получает ссылку на картинку и ссылку на сайт и возвращает элемент.

{
    const RazdElem = document.createElement("p") 
    RazdElem.innerText = "---------------------------------------------- Второстепеные задачи - 3-------------------------------------------"
    document.body.append(RazdElem)
 }

// 3 - Создать множество карточек с товарами (на основе массива с объектами. У объекта свойства title, unitprice, count) -> массив с продуктами https://pastebin.com/1PDjyE0J 

}
const products = [
    {
        title: "bicycle",
        unit_price: 45000,
        discount: 10,
        count: 15
    },
    {
        title: "roller-skates",
        unit_price: 15000,
        discount: 5,
        count: 4
    },
    {
        title: "kick scooter",
        unit_price: 10000,
        discount: 30,
        count: 5
    },
    {
        title: "skis",
        unit_price: 25000,
        discount: 10,
        count: 12
    },
    {
        title: "skate",
        unit_price: 10000,
        discount: 0,
        count: 1
    }
]
{
    const RazdElem = document.createElement("p") 
    RazdElem.innerText = "---------------------------------------------- Второстепеные задачи - 4 -------------------------------------------"
    document.body.append(RazdElem)
 }
// 4 - Написать скрипт, который выводит карточки с товарами в интерфейс (на основе массива с объектами. У объекта свойства title, unitprice, count), а внизу выводится итоговая сумма товаров и их количество.

{
    sum   = 0
    count = 0
    const newDivElem = document.createElement("div")
    newDivElem.className = "product_container"
    

    for (let i=0;i<products.length;i++)
    {
        const nextDiv = document.createElement("div")
        nextDiv.innerText=`Наименование : ${products[i].title} Цена за еденицу: ${products[i].unit_price}  Количество: ${products[i].count}`
        
        sum = sum + (products[i].count * products[i].unit_price)
        count=count+products[i].count

        newDivElem.append(nextDiv)        
    }

    const nextDiv = document.createElement("div")
    nextDiv.innerText=`Всего едениц товара : ${count} На общую сумму: ${sum} `
    newDivElem.append(nextDiv)
        document.body.append(newDivElem)
}