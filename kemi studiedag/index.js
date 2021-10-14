let main = document.querySelector('main')
let button = document.querySelector('#button')

main.style.backgroundImage = 'url("./assets/1.png")'

const skiftBillede = () => {
    
    
    if(main.style.backgroundImage == 'url("./assets/1.png")'){
        main.style.backgroundImage = 'url("./assets/2.png")'
    }
    else if (main.style.backgroundImage == 'url("./assets/2.png")'){
        main.style.backgroundImage = 'url("./assets/3.png")'
    }
    else if (main.style.backgroundImage == 'url("./assets/3.png")'){
        main.style.backgroundImage = 'url("./assets/4.png")'
    } 
    else if (main.style.backgroundImage == 'url("./assets/4.png")'){
        main.style.backgroundImage = 'url("./assets/5.png")'
    } 
    else if (main.style.backgroundImage == 'url("./assets/5.png")'){
        main.style.backgroundImage = 'url("./assets/6.png")'
    } 
    else if (main.style.backgroundImage == 'url("./assets/6.png")'){
        main.style.backgroundImage = 'url("./assets/7.png")'
    } 
    else if (main.style.backgroundImage == 'url("./assets/7.png")'){
        main.style.backgroundImage = 'url("./assets/8.png")'
    } 
    else if (main.style.backgroundImage == 'url("./assets/8.png")'){
        main.style.backgroundImage = 'url("./assets/9.png")'
    } 
    else if (main.style.backgroundImage == 'url("./assets/9.png")'){
        main.style.backgroundImage = 'url("./assets/10.png")'
    } 
    else if (main.style.backgroundImage == 'url("./assets/10.png")'){
        main.style.backgroundImage = 'url("./assets/11.png")'
    } 
    else if (main.style.backgroundImage == 'url("./assets/11.png")'){
        main.style.backgroundImage = 'url("./assets/12.png")'
    } 
    else if (main.style.backgroundImage == 'url("./assets/12.png")'){
        main.style.backgroundImage = 'url("./assets/13.png")'
    } 
    else{
        main.style.backgroundImage = 'url("./assets/1.png")'
    }    
    
}




button.addEventListener('click', skiftBillede)
