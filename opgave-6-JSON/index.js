let people = [
    {
        name: 'Porter',
        surname: 'Robinson',
        listeners: '2.186.269',
        album: ['Nurture', 'Worlds [remixed]', 'Worlds Commentary', 'Worlds'],
        song: ['Get Your Wish', 'Look At The Sky', 'Divinity', 'Mirror', 'Mother'],
        location: 'Los Angeles, US',
    },    
    {
        name: 'acloudyskye',
        surname: '',
        listeners: '40.323',
        album: ['Blood Rushing Like Current Through a Powerline', 'A Place Where Mountains Hide'],
        song: ['Empty Space', 'Heliov', 'When There Was Others', 'There is Still Time', 'Downfall'],
        location: 'Los Angeles, US',
        
    },    
    {
        name: 'Haywyre',
        surname: '',
        listeners: '395.119',
        album: ['Two Fold Pt.2', 'Two Fold Pt.1', 'The Voyage', 'Dubsonic', 'Of Mellows And Revelations'],
        song: ['Never Count On Me', 'Contagious', 'Let Me Hear That', 'With You', 'Tell Me', 'Endlessly', 'Memory', 'Dichotomy'],
        location: 'Los Angeles, US',
       
    },    
    {
        name: 'San',
        surname: 'Holo',
        listeners: '2.080.907',
        album: ['bb u ok?', 'album1: a lot of remixes', 'album1 (commentary)', 'album1'],
        song: ['forever free', 'lift me from the ground', 'thoughts and chemicals', 'wheels up', 'i get lonely around people, too'],
        location: 'Los Angeles, US',
       
      
    },    
    {
        name: 'DROELOE',
        surname: '',
        listeners: '1.354.180',
        album: ['A Matter Of Perspective'],
        song: ['Sunburn', 'Weird Machine', 'BACKBONE', 'Only Be Me', 'Kintsugi'],
        location: 'Los Angeles, US',
       
        
    },    
    {
        name: 'underscores',
        surname: '',
        listeners: '209.691',
        album: ['fishmonger', 'skin purifying treatment'],
        song: ['pay attention!', 'Second hand embarrassment', 'Spoiled little brat', 'melodrama', 'voice of reason'],
        location: 'Los Angeles, US',
       
        
    },    
    {
        name: 'Sam',
        surname: 'Gellaitry',
        listeners: '387.042',
        album: ['Viewfinder Vol. 1: PHOSPHENE'],
        song: ['Duo', 'Assumptions', 'Acres', 'Ceremony', 'Atlantis', 'The Gateway', 'Viewfinder'],
        location: 'Los Angeles, US',
       
        
    },    
    {
        name: 'Kero Kero',
        surname: 'Bonito',
        listeners: '1.372.915',
        album: ['Civilisation', 'Time n Place', 'Bonito Generation', 'Intro Bonito'],
        song: ['21/04/20', 'Time Today', 'Outside', 'Flyway', 'Swimming'],
        location: 'Los Angeles, US',
       
       
    },    
    {
        name: 'Marcioz',
        surname: '',
        listeners: '32.871',
        album: ['Mulato Tragidy'],
        song: ['Mate Um Bonito Hoje Mesmo!', 'The Very Very $hy Pearl', 'How to Fall in Love With a Machine'],
        location: 'Los Angeles, US',
       
    }    
]

people.map( person => {
    let newDiv = document.createElement('div')
    let htmlString = '<h1>' + person.name + ' ' + person.surname + '</h1>' 
    htmlString += '<p>Monthly listeners: ' + person.listeners + '</p>'
    htmlString += '<p>Albums: ' + person.album.join(', ') + '</p>'
    htmlString += '<p>Bananpalmes favorite songs: ' + person.song.join(', ') + '</p>'
    htmlString += '<p>Most listened to in ' + person.location + '</p>'
    
    newDiv.innerHTML = htmlString
    document.querySelector('body').append(newDiv)
} )
