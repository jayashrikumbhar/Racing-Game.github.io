const score = document.querySelector('.score')
const startScreen = document.querySelector('.startScreen')
const gameArea = document.querySelector('.gameArea')

document.addEventListener('keydown',keyDown)
document.addEventListener('keyup',keyUp)

window.addEventListener('click',start)

let player = {}

let keys = {ArrowUp:false, ArrowDown:false,ArrowLeft:false,ArrowRight:false}
function keyDown(e)
{
	e.preventDefault()
	keys[e.key]=true
	console.log(keys)
}

function keyUp(e)
{
	e.preventDefault()
	keys[e.key]=false
	console.log(keys)
}

function start()
{
	gameArea.classList.remove('hide')
	startScreen.classList.add('hide')
	
	player.start = true;
	window.requestAnimationFrame(gamePlay)
}
function gamePlay()
{
	console.log("I am clicked")
	if(player.start)
	{
		window.requestAnimationFrame(gamePlay)
	}
	
}

let car = document.createElement('div')
car.setAttribute('class','car')
car.innerText =  "Hey I am ur car"
gameArea.appendChild(car)