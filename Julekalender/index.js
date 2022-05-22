const epico = new Audio('./assets/epic.mp3');
const goldlego = new Audio('./assets/gold leg.mp3')
const legendaryo = new Audio('./assets/legendary.mp3')
const rareo = new Audio('./assets/rare.mp3')
const chest = new Audio('./assets/chest.mp3')

// fetcher json-filen så man kan arbejde med den data der ligger der
fetch('./kalender.json')
    .then( res => res.json() )
    .then( json => {
        console.log(json)
        json.days.map( door => {
            // laver en div og giver den højden, bredden og datoen fra json
            let div = document.createElement('div')
            div.id = door.date + '-day'
            div.classList.add('door')
            div.style.width = door.width
            div.style.height = door.height
            
            // laver en anden div som skal sidde på den første div
            let lock = document.createElement('div')
            lock.classList.add('lock')
            lock.innerHTML = door.date


            
           
            
            
            // Laver en eventlistener på låsen
            lock.addEventListener("click", () => {
                // switch statement til lyden der skal spille med eventlisteneren, ud fra hvilken "rarity" lågen har
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
                
                // switch statement til animationen lågen skal have når eventlisteneren trykkes
                switch(door.animation){
                    case 'slide':
                        lock.classList.toggle('open')
                    break
                    case 'golden':
                        lock.classList.toggle('goldenopen')
                        lock.classList.toggle('open')
                    break
                    case 'legendary':
                        lock.classList.toggle('cum')
                        lock.classList.toggle('open')
                    break
                    case 'sovs':
                        lock.classList.toggle('sovsjohn')
                    default:
                        lock.classList.toggle('open')
                        break
                    }
            })
            
            // switch statement hvis jeg havde billeder og videoer (der er ikke bileder)
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
//const til switch statement om hvordan et billede eller en video skal ind på lågen.
const setImage = (div, obj) => {
    div.style.backgroundImage = `url('${obj.url}')`
}
const setYoutube = (div, obj) => {
    div.innerHTML = obj.embed
}
const setBoredApi = (div, obj) => {

}
