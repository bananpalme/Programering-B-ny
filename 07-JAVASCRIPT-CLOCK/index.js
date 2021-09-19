let timer = document.querySelector('#timer')
let min = document.querySelector('#min')
let sek = document.querySelector('#sek')
let thomas = document.querySelector('#thomas')






const saetTid = () => {
    let tid = new Date()
    let nul = ''
    
    if(tid.getSeconds() < 30){
        thomas.style.backgroundImage = "URL('./assets/1.PNG')"
        
    }else{
        thomas.style.backgroundImage = "URL('./assets/2.PNG')"
    }

    thomas.style.marginLeft = 1.6 * tid.getSeconds() + '%'

    if(tid.getHours() < 10) nul = '0'
    timer.innerHTML = nul + tid.getHours()

    nul = ''
    if(tid.getMinutes() < 10) nul = '0'
    min.innerHTML = nul + tid.getMinutes()

    nul = ''
    if(tid.getSeconds() < 10) nul = '0'
    sek.innerHTML = nul + tid.getSeconds()
}

setInterval(saetTid, 1000)

