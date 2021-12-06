var epico = new Audio('./assets/epic.mp3');
var goldlego = new Audio('./assets/gold leg.mp3')
var legendaryo = new Audio('./assets/legendary.mp3')
var rareo = new Audio('./assets/rare.mp3')
var chest = new Audio('./assets/chest.mp3')

fetch('./kalender.json')
    .then( res => res.json() )
    .then( json => {
        console.log(json)
        json.days.map( door => {
            let div = document.createElement('div')
            div.id = door.date + '-day'
            div.classList.add('door')
            div.style.width = door.width
            div.style.height = door.height
            
            let lock = document.createElement('div')
            lock.classList.add('lock')
            lock.innerHTML = door.date
            
            lock.addEventListener('click', () => {
                
                
                switch(door.rarity){
                    case 'rare':
                        rareo.play()
                        chest.play()
                    break
                    case 'epic':
                        chest.play()
                        epico.play()
                    break
                    case 'legendary':
                        legendaryo.play()
                        chest.play()
                    break
                    case 'goldlegendary':
                        goldlego.play()
                        chest.play()
                    break
                }

                switch(door.animation){
                    case 'slide':
                        lock.innerHTML = ''
                        lock.classList.add('open')
                    break
                    case 'golden':
                         lock.innerHTML = ''
                        lock.classList.add('goldenopen')
                    break
                    case 'legendary':
                        lock.innerHTML = ''
                        lock.classList.add('cum')
                    break
                    case 'sovs':
                        lock.innerHTML = ''
                        lock.classList.add('sovsjohn')
                    default:
                        lock.innerHTML = ''
                        lock.classList.add('open')
                        break
                    }
            })
                        
            switch(door.content){
                case 'image': 
                    setImage(div, door)
                break
                case 'youtube': 
                    setYoutube(div, door)
                break
                default:
                break
                                
            }
                            
            document.querySelector('main').append(div)
            div.append(lock)
        })
    })

const setImage = (div, obj) => {
    div.style.backgroundImage = `url('${obj.url}')`
}
const setYoutube = (div, obj) => {
    div.innerHTML = obj.embed
}
const setBoredApi = (div, obj) => {

}

function play() {
    var audio = new Audio('./assets/sang.mp3')
    audio.play();
}


