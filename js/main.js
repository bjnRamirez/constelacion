let canvas = document.getElementById("canvas")
let ctx  = canvas.getContext('2d')

let cw
let ch

function init() {
    cw = canvas.width = window.innerWidth;
    ch = canvas.height = window.innerHeight;
}

setTimeout(function() {
    init();
    addEventListener("resize", init, false);
}, 15);


let frame

class Star{
    constructor(x, y, radius){
        this.x = x
        this.y = y
        this.radius = radius
        this.color = this.colors()
    }

    draw(){
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        ctx.fillStyle= this.color
        ctx.fill()
        ctx.stroke()
    }
    colors(){
        let r = Math.floor(Math.random() * 255)
        let g = Math.floor(Math.random() * 255)
        let b = Math.floor(Math.random() * 255)
        return `rgba(${r}, ${g}, ${b}, 1)`
    }
}

function update(){

    for(let i = 0; i < 1; i++){
        let star = new Star(Math.random() * cw,  Math.random() * ch, 1.5 * Math.random(), this.color)
        star.draw();
    }

    requestAnimationFrame(update)
    frame++
}

update()


function play() {
    let cometa = document.createElement('div');
    cometa.innerHTML = `<img src="./img/comet.png" class="comet"></img>`
    document.body.appendChild(cometa);
}

const playSound = function() {
    let element = document.createElement('div');
    element.setAttribute('style', 'display: none');
    element.innerHTML = `
    <audio autoplay loop>
        <source src="./piano/music.mp3" type="audio/mp3">
    </audio>
    `;
    document.body.appendChild(element);
    document.removeEventListener('click', playSound);
}
document.addEventListener('click', playSound);


function estrellas() {
    let estrellas = document.createElement('div');
    estrellas.classList ="night"
    estrellas.innerHTML = `
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    `
    document.body.appendChild(estrellas);
}

setTimeout(() =>{
    estrellas();
}, 16000);

setTimeout(() =>{
    estrellas();
}, 31000);

setTimeout(() =>{
    estrellas();
}, 44000);

setTimeout(() =>{
    estrellas();
}, 55000);