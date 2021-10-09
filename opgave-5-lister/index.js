let main = document.querySelector('main')
let body = document.querySelector('body')


let search = document.querySelector('#search')

let sovs = ['brunsovs', 'bearnaise sovs', 'marmelade', 'fiskesovs', 'tomatsuppe', 'hollandaise sovs', 'kagemand', 'bechamel sovs']

const makeCards = array => {
    array.map( name => {
        let card = document.createElement('div')
        card.classList.add('card') 
    
        let top = document.createElement('div')    
        top.classList.add('top')
    
        let bottom = document.createElement('div')    
        bottom.classList.add('bottom')
    
        let h = document.createElement('h1')
        h.innerHTML = name
        
        let p = document.createElement('p')
        p.innerHTML = 'Sovs: De er blevet sovset godt til. <br> <br>alder: De har stået ude i en bil i 68 år.'
        
        top.append(h)
        bottom.append(p)
        card.append(top)
        card.append(bottom)
        
        main.append(card) 
    })
}


console.log(sovs.length)


for(let i = 0; i < sovs.length; i++){
    console.log(sovs[i])
}

sovs.map(f => console.log(f))

makeCards(sovs)

search.addEventListener('input', () => {
    //console.log(search.value)
    let results = sovs.filter( name => {
        if(name.toLowerCase().includes(search.value.toLowerCase())){
            return true
        }else{
            return false
        }
    })
    //console.log(results)
    main.innerHTML = ''
    makeCards(results)
})
