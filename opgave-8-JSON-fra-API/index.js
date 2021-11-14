const getActivity = () => {
    fetch('https://www.boredapi.com/api/activity' + document.querySelector('#select-type').value + document.querySelector('#select-pants').value)
        .then( response => response.json())
        .then(json => createCard(json))
        
}


const createCard = a =>{
    document.querySelector('#title').innerHTML = a.activity
    document.querySelector('#pants').innerHTML = a.participants
    document.querySelector('#acc').innerHTML = a.accessibility
    document.querySelector('#price').innerHTML = a.price
    document.querySelector('#cat').innerHTML = a.type
}

getActivity()

document.querySelector('#fetch').addEventListener('click',getActivity)