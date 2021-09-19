let timer = document.querySelector('#timer')
let min = document.querySelector('#min')
let sek = document.querySelector('#sek')
let thomas = document.querySelector('#thomas')
const button = document.querySelector("#button");
const icon = document.querySelector("#button > i");
const audio = document.querySelector("audio");

const colorDiv = document.querySelector('.change-color');
let counter = 0;

const colorArr = ['pink', 'lavender']

setInterval( ()=> {
		counter++
		
		if (counter == colorArr.length) {
			counter = 0
		}
		
		colorDiv.style.background = colorArr[counter];
	}, 2000
)

button.addEventListener("click", () => {
    if (audio.paused) {
      audio.volume = 0.2;
      audio.play();
      icon.classList.remove('prut-up');
      icon.classList.add('prut-mute');
      audio.loop
    }
    button.classList.add("fade");
});
  

audio.addEventListener('ended', function() {
    audio.currentTime = 0;
    audio.play();
}, false);


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

