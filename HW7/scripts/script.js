console. log ("//------------------ Первая часть ---------------")
function getMin(a,b) 
{
  if (b>a) return a
  return b       
}

console.log (`Наименьшее число :${getMin(9,10)}`)

console. log ("//------------------ Вторая часть ---------------")

function rangeOven(a,b)
{
    let minR = a
    let maxR = b
    if (a>b) {minR=b, maxR=a}
    for (let i=maxR; i>minR; i--)
    {
            if (!(i%2)) {
                    console.log( i )}
    }
}
rangeOven(10,20)

console. log ("//------------------ Третья часть ---------------")

function stepen(a,b=2)
{
    return (a**b)
}
console. log (stepen (4,3))
console. log (stepen (3))

console. log ("//------------------ Четвертая часть ---------------")

function summa(a)
{
    sum =0;
    for  (let i=1;i<=a; i++){
             sum=sum+i   
    }
    return sum
}

console. log (summa(9))

console. log ("//------------------ Пятая часть ---------------")

function sumOven(n,m)
{
    let minR = n
    let maxR = m
    let sum = 0, sumOven = 0, sumNon = 0
    if (n>m) {minR=m, maxR=n}
    for (let i=minR; i<=maxR; i++)
    {
            sum =sum+i
            if (i%2) { sumNon = sumNon+i }
            else {sumOven =sumOven+i}
    }
    console.log(`Сумма четных: ${sumOven} Сумма нечетных: ${sumNon} Сумма всех:${sum}`)
}

sumOven (18,8)

console. log ("//------------------ Шестая часть ---------------")


let arr = ["12","1234","125","1243","5678","893","127"]
let arr1 =[]

function maxStr (strArr)
{
    if (!strArr[0]) return null;
    let maxS = strArr[0] 
    for (let i = 0; i<strArr.length; i++)
    {
            if (strArr[i].length>maxS.length)
            {maxS = strArr[i]}
    }
    return maxS
}
console.log(maxStr(arr)) 
console.log(maxStr(arr1))

console. log ("//------------------ Необъязательная часть ---------------")
console. log ("//------------------ Задача № 9 ---------------")

{
    let sum = 0;
    for (let i=0;i<=50;i+=5) 
        {sum+=i}
    console.log(`Сумма чисел кратных 5, от 0 до 50:${sum}`)
    // Или как вариант №2
    sum = 0
    for (let i=0;i<=50;i++) 
        if (!(i%5)) {sum+=i}
    console.log(`Сумма чисел кратных 5, от 0 до 50:${sum}`)    
}

console. log ("//------------------ Задача № 10 ---------------")


const goods = [
    {
        id: 1,
        title: "bicycle",
        price: 35000,
        discount: 10
    },
    {
        id: 2,
        title: "roller-skates",
        price: 15000,
        discount: 5
    },
    {
        id: 3,
        title: "kick scooter",
        price: 10000,
        discount: 30
    },
    {
        id: 4,
        title: "skis",
        price: 25000,
        discount: 10
    },
    {
        id: 5,
        title: "skate",
        price: 10000,
        discount: 0
    }
]
{
for (let i=0;i<goods.length;i++)
    {   console.log(` Название: ${goods[i].title}`)}
}
console. log ("//------------------ Задача № 11 ---------------")
{
for (let i=0;i<goods.length;i++)
    {   
        console.log(` Название: ${goods[i].title}, Цена со скидкой ${goods[i].price*(100-goods[i].discount)/100}`)}
}
console. log ("//------------------ Задача № 12 ---------------")

function getSuper(goods)
{
    let retInde = 0
    let priceHi = 0  

    for(const [id,value] of Object.entries(goods)) {
        if (priceHi < value.price) {
          retInde = id;
          priceHi = value.price;
        }
      }
      return goods[retInde]      
}

console.log(getSuper(goods))