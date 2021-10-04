let main = document.querySelector('main')
let button = document.querySelector('#button')

main.style.backgroundImage = 'url("./assets/BANAN.jpg")'

const skiftBillede = () => {
    
    
    if(main.style.backgroundImage == 'url("./assets/BANAN.jpg")'){
        main.style.backgroundImage = 'url("./assets/daddy.jpg")'
    }
    else if (main.style.backgroundImage == 'url("./assets/daddy.jpg")'){
        main.style.backgroundImage = 'url("./assets/joyryde.jpg")'
    }
    else if (main.style.backgroundImage == 'url("./assets/joyryde.jpg")'){
        main.style.backgroundImage = 'url("./assets/grøntsag.jpg")'
    } 
    else{
        main.style.backgroundImage = 'url("./assets/BANAN.jpg")'
    }    
    
}




button.addEventListener('click', skiftBillede)

  