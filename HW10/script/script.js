//
let users=[
    {fName:"Иван",
     lName:"Иванов",
       age: 17},
    {fName:"Петр",
     lName:"Петров",
     age: 18},
     {fName:"Сергей",
     lName:"Сергеев",
       age: 19},     
    {fName:"Вася",
     lName:"Васильев",
     age: 57},    
     { 
     fName:"Яков",
     lName:"Арбузов",
     age: 7},  
     {fName:"Матвей",
     lName:"Матвеев",
       age: 14},     
    {fName:"Сидор",
     lName:"Листков",
     age: 15},    
     { 
     fName:"Яша",
     lName:"Динамит",
     age: 33}           
]

// Первая часть задания

const inputForm  = document.querySelector("#inputForm")

const inputFN = document.querySelector(".inputF1")
inputFN.addEventListener("input",function(e){
        if ((inputFN.value.length<3)||(inputFN.value.length>16))
        {inputFN.style.color = "red"}
        else {inputFN.style.color = "black"}})

const inputLN = document.querySelector(".inputF2")
inputLN.addEventListener("input",function(e){
    if ((inputLN.value.length<3)||(inputLN.value.length>16))
    {inputLN.style.color = "red"}
    else {inputLN.style.color = "black"}})

const inputAge = document.querySelector(".inputF3")

inputForm.addEventListener("submit", function (e) {
   
    console.log(`Фамилия ${inputFN.value} Имя  ${inputLN.value} Возраст ${inputAge.value}`) // первая часть
    e.preventDefault()
    if (((inputFN.value.length >2) && (inputFN.value.length < 17)) &&
            ((inputLN.value.length >2) && (inputLN.value.length < 17))) {
    const mem = {fName:inputFN.value,lName:inputLN.value,age:+inputAge.value}
    users.push(mem)
    console.log(users)
    inputForm.reset()
    rerender()}
})

function userCardAdd ({fName,lName,age})
{
    const newCard = document.createElement("div")
    newCard.className = "userCard"
    const firstP = document.createElement("p")
    firstP.innerText = "Имя      : "+fName
    const lastP = document.createElement("p")
    lastP.innerText = "Фамилия: "+lName
    const ageP = document.createElement("p")
    ageP.innerText = "Возраст: "+age+" лет"
    newCard.append(firstP,lastP,ageP)
    return newCard    
}

function rerender ()
{
    const  userContainer = document.querySelector(".usersCards") 
    userContainer.innerHTML=""
    for (let i=0;i<users.length;i++)
    {
        let cardUser = document.createElement("div") 
        cardUser = userCardAdd(users[i])
        userContainer.append(cardUser)
        cardUser.addEventListener("dblclick",function(){
        users.splice(i,1)
        rerender() })
    }
    

    }
 
    const SelectForm = document.querySelector(".sort")
    const sortField = document.querySelector("#sorting")
    
    SelectForm.addEventListener("change", function (e) {
        e.preventDefault()
       
        if (sortField.value === 'fname') {
            console.log(sortField.value)

          users = users.sort(function(a, b) {
            return a.fName.localeCompare(b.fName)
          })
        } else if (sortField.value === 'lname') {
            console.log(sortField.value)

            users = users.sort(function(a, b) {
            return a.lName.localeCompare(b.lName)
          })
        }
        else if (sortField.value === 'age') {
            users = users.sort(function(a, b) {
                return a.age - b.age
            })
        }
        rerender()

    })

rerender()


