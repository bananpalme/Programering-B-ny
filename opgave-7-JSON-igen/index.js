

let data



fetch('./data/artifact.json')

    .then( res => res.json() )
    .then (json => {
            console.log(json)
            console.log(json)
            data = json.artifact
            document.querySelector('#title').innerHTML = json.description


            json.artifacts.map( artifact => {
                newCard(artifact)
            })

        }  )



        
    const newCard = (artif) =>{
        let card = document.createElement('div')
        let heading = document.createElement('h2')
        let lel = document.createElement('div')
        let nede = document.createElement('div')
        card.classList.add('card')
        lel.classList.add('members')
        nede.classList.add('mem')
        heading.innerHTML = artif.name
        lel.innerHTML = artif.synonyms
        lel.innerHTML = artif.qualities
        nede.innerHTML = artif.nature
        
        
        card.append(heading)
        card.append(lel)
        card.append(lel)
        card.append(nede)

        
        
        let list = ''
        artif.synonyms.map(synonyms =>list += '<li>' + synonyms + '</li>')
        artif.qualities.map(qualities =>list += '<li>' + qualities + '</li>')
        
        document.querySelector('main').append(card)
        lel.innerHTML = list
        
    }

    
    
