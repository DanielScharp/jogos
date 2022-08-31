const dino = document.querySelector('.dino');
const background = document.querySelector('.background')

let isJumping = false;
let position= 0;
let contador = 0
var pontosCactos = 0
var  _segundo  =  1000;

function handleKeydown(event) {
    if (event.keyCode === 32) {
        if (!isJumping){
        jump( )
    }
    }
}

function jump() {
    isJumping = true;
    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval)
            let downInterval = setInterval(() => {
                if (position <= 0 ) {
                    clearInterval(downInterval)
                    isJumping = false;
                    contador++
                    var pulos = document.querySelector('.pulos')
                    pulos.innerHTML = `${contador}`

                } else {
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
                
            }, 20)
        } else {
            position += 20;
            dino.style.bottom = position + 'px';
        }
       
    }, 20);
    
}

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1500;
    let randomTime = Math.random() * (6000 - 1000) + 1000;;
    console.log(randomTime);

    cactus.classList.add('cactus');
    cactus.style.left = 1500 + 'px'
    background.appendChild(cactus)
    
    let leftInterval = setInterval(() => {
        cactusPosition -= 10;
        cactus.style.left = cactusPosition + 'px';
        if (cactusPosition < -60) {
            clearInterval(leftInterval)
            background.removeChild(cactus)
            pontosCactos += 10;
            var pontos= document.querySelector('.pontos')
            pontos.innerHTML = `${pontosCactos}`
            
        } else if(cactusPosition > 0 && cactusPosition < 60 && position < 60){
            clearInterval(leftInterval)
    document.body.innerHTML = `<h1 class="game-over">Fim de Jogo, você fez ${pontosCactos} pontos</h1> `
        }else{
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20)
    
    setTimeout(createCactus, randomTime)
}

var n = 1;
var l = document.querySelector(".segundos");
window.setInterval(function(){
  l.innerHTML = n;
  n++;
},1000);

createCactus()
document.addEventListener('keydown', handleKeydown)