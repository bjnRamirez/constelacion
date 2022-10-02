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
        return `rgba(${r}, ${g}, ${b}, 0.6)`
    }
}

function update(){

    for(let i = 0; i < 2; i++){
        let star = new Star(Math.random() * cw,  Math.random() * ch, 1.5 * Math.random(), this.color)
        star.draw();
    }

    requestAnimationFrame(update)
    frame++
}

update()


const playSound = function() {
    let element = document.createElement('div');
    element.setAttribute('style', 'display: none');
    element.innerHTML = `
      <audio autoplay loop>
        <source src="./music/piano.mp3" type="audio/mp3">
      </audio>
    `;
    document.body.appendChild(element);
    document.removeEventListener('click', playSound);
}
document.addEventListener('click', playSound);