{
    const RazdElem = document.createElement("p") 
    RazdElem.innerText = "---------------------------------------------- Задача №1 -------------------------------------------"
    document.body.append(RazdElem)
 }

 // Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px

// Я добавил при повторном нажатии возвращаем к исходному состоянию 

{
const newDiv=document.createElement("div")
    newDiv.style.width ="200px"
    newDiv.style.height="200px"
    newDiv.style.backgroundColor="red"
    newDiv.style.margin="40px"
    const newButton=document.createElement("button")
    newButton.innerText = "Click Me "
    newButton.style.marginLeft="40px"
    let flag = true

    newButton.addEventListener("click",function() {
     
     if (flag) {   newDiv.style.width ="100px"
        newDiv.style.height="100px"
        newDiv.style.backgroundColor="green"        
        flag = false
    }
    else {
        newDiv.style.width ="200px"
        newDiv.style.height="200px"
        newDiv.style.backgroundColor="red"        
        flag = true
}})
    document.body.append(newDiv,newButton)
}

{
    const RazdElem = document.createElement("p") 
    RazdElem.innerText = "---------------------------------------------- Задача №2 -------------------------------------------"
    document.body.append(RazdElem)
 }

//  Создать кнопку и розовый квадрат с размерами 200х200px. При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.

// Я добавил при повторном нажатии возвращаем к исходному состоянию и выводим в консоль цвет

{
    const newDiv=document.createElement("div")
        newDiv.style.width ="200px"
        newDiv.style.height="200px"
        newDiv.style.backgroundColor="pink"
        newDiv.style.margin="40px"
    const newButton=document.createElement("button")
    
        newButton.innerText = "Click Me "
        newButton.style.marginLeft="40px"

        let flag = true

        newButton.addEventListener("click",function() {
            if (flag) {
                newDiv.style.backgroundColor="blue"   
                console.log(`${newDiv.style.backgroundColor}`)   
                flag = false  }
            else {
                newDiv.style.backgroundColor="pink"   
                console.log(`${newDiv.style.backgroundColor}`)     
                flag= true
            }   
        })
        
        document.body.append(newDiv,newButton)
    }


{
    const RazdElem = document.createElement("p") 
    RazdElem.innerText = "---------------------------------------------- Задача №3 -------------------------------------------"
    document.body.append(RazdElem)
 }

// Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку увеличивать высоту и ширину квадрата на 20px.


// Я добавил: 1. при нажатии я добавил автора произведения и 2. при повторном нажатии возвращаем к исходному состоянию
{
    let size = 150
    const newDiv=document.createElement("div")
        newDiv.style.width = size +"px"
        newDiv.style.height= size+"px"
        newDiv.style.backgroundColor="black"
        newDiv.style.margin="40px"
        console.log(newDiv.style.width )
    const newButton=document.createElement("button")

    const newP=document.createElement("p")
        newP.style.margin ="40px"
        newButton.innerText = "Click Me "
        newButton.style.marginLeft="40px"

        let flag = true

        newButton.addEventListener("click",function() {
            if (flag) {
                newP.innerText= "Каземир Мальевич 'Черный квадрат' 1915 г."            
                newDiv.style.width =size+20+"px"
                newDiv.style.height=size+20+"px"
                flag = false  }
            else {
                newP.innerText=""
                newDiv.style.width =size+"px"
                newDiv.style.height=size+"px"
                flag= true
            }   
        })
        
        document.body.append(newDiv,newP,newButton)
    }

    {
        const RazdElem = document.createElement("p") 
        RazdElem.innerText = "---------------------------------------------- Задача №4 -------------------------------------------"
        document.body.append(RazdElem)
     }
    
    // Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный.
    
    // Я добавил при повторном нажатии возвращаем к исходному состоянию
     {
    const newDiv=document.createElement("div")
    newDiv.className = "root"
    newDiv.style.margin="40px"
    newDiv.style.width = "40%"

    const newButton=document.createElement("button")
    newButton.innerText = "Click Me "
    newButton.style.marginLeft="40px"

    const newP=document.createElement("p")
    newP.style.margin ="40px"
    newP.style.color = "blue"

    newDiv.appendChild(newP)

    let flag = true

    newButton.addEventListener("click",function() {
        if (flag) {
            newP.innerText= "Чёрный супрематический квадрат — картина Казимира Малевича, созданная в 1915 году. Её можно считать opus magnum художника. Это его наиболее значительное произведение в концептуальном смысле, одна из самых обсуждаемых и самых известных картин в мировом искусстве"            
            flag = false  }
        else {
            newP.innerText=""
            flag= true
        }   
    })

    document.body.append(newDiv,newButton)
    }
    {
        const RazdElem = document.createElement("p") 
        RazdElem.innerText = "---------------------------------------------- Задача №5 -------------------------------------------"
        document.body.append(RazdElem)
     }



    //Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий.
{
    const newDiv=document.createElement("div")
    newDiv.className = "root"
    newDiv.style.margin="40px"
    newDiv.style.width = "40%"

    const newButton=document.createElement("button")
    newButton.innerText = "Click Me "
    newButton.style.marginLeft="40px"

    const newPBlue=document.createElement("p")
    newPBlue.style.margin ="40px"
    newPBlue.style.color = "blue"

    const newPGreen=document.createElement("p")
    newPGreen.style.margin ="40px"
    newPGreen.style.color = "green"

    newDiv.appendChild(newPBlue)
    newDiv.appendChild(newPGreen)
    newPBlue.innerText= "Предшествовавший созданию картины период с 1910 по 1913 год был решающим в развитии русского авангарда. В это время движение кубофутуризма достигло своего апогея и начали появляться новые художественные направления. Кубизм и его метод «геометризации» уже казались художникам односторонними."   

    newPGreen.innerText ="Одни художники стремились к более тонкой и сложной согласованности искусства с природой. Другим в кубизме мешала его неизменная привязанность к «предметности» изображения. "    


    let flag = false

    newButton.addEventListener("click",function() {
        if (flag) {
            newPBlue.style.color="blue"     
            newPGreen.style.color="green"    
            flag = false  }
        else {
            newPBlue.style.color="green"     
            newPGreen.style.color="blue"     
            flag= true
        }   
    })

    document.body.append(newDiv,newButton)
}

{
    const RazdElem = document.createElement("p") 
    RazdElem.innerText = "---------------------------------------------- Хорошего НАСТРОЕНИЯ! -------------------------------------------"
    document.body.append(RazdElem)
 }