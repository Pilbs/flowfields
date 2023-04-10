//Setup canvas context
const canvas0 = document.getElementById('canvas-bg-static');
const canvas1 = document.getElementById('canvas-bg-animate');
const canvas2 = document.getElementById('canvas-fg-static');
const canvas3 = document.getElementById('canvas-fg-animate');
const ctx0 = canvas0.getContext('2d');
const ctx1 = canvas1.getContext('2d');
const ctx2 = canvas2.getContext('2d');
const ctx3 = canvas3.getContext('2d');
const width = window.innerWidth * 0.8;
const height = window.innerHeight * 0.8;


// Set canvas size
canvas0.width = width;
canvas1.width = width;
canvas2.width = width;
canvas3.width = width;
canvas0.height = height;
canvas1.height = height;
canvas2.height = height;
canvas3.height = height;
// Set planet class size (s), main color lightness (l) for gradient and secondary lightness (l2) for gradient
let s = 100;
let l = 25;
let l2 = l + 40;
// Debugging
let results = [];

class ShootingStar {
    constructor(canvas1, x, y, r, vx, vy) {
        this.canvas = canvas1;
        this.x = x;
        this.y = y;
        this.r = r;
        this.vx = vx;
        this.vy = vy;
    }
    draw(context, x, y) {
        let alpha = 1
        for (let i = 0; i < 160; i++) {
            context.beginPath();
            context.arc(x - i * 3, y - i * 3, this.r, 0, 2 * Math.PI);
            context.fillStyle = `hsla(180,100%,580%,${alpha / i})`;
            context.fill();
            context.closePath();
        }
    }
    animate() {
        ctx1.clearRect(0, 0, canvas1.width, canvas1.height)
        this.draw(ctx1, this.x, this.y);
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < canvas0.width + 100) {
            results.push(Math.floor(this.x))

        }
        console.table(results)
        requestAnimationFrame(this.animate.bind(this))
    }
}


class Planet {
    constructor(canvas2) {
        this.canvas = canvas2;
        this.x = this.canvas.width / 2;
        this.y = this.canvas.height / 2;
       
    }
    draw(context, s, h) {
        context.beginPath();
        // Draw atmosphere circle    
        context.arc(this.x, this.y, s * 1.05, 0, 2 * Math.PI);
        context.fillStyle = `hsla(0,0%,100%,0.05)`;
        context.fill();
        context.closePath();
        // Draw planet circle with gradient fill to give "3d" affect
        context.beginPath();
        const grd = context.createRadialGradient(this.x, this.y, s, this.x / 2, this.y / 2, s / 5);
        grd.addColorStop(0, `hsl(${h},${s}%,${l}%)`);
        grd.addColorStop(1, `hsl(${h},${s}%,${l2}%)`);
        context.arc(this.x, this.y, s, 0, 2 * Math.PI);
        context.fillStyle = grd;
        context.fill();
        context.closePath();

    }
}

class Star {
    constructor(canvas, x, y, r) {
        this.canvas = canvas;
        this.x = x;
        this.y = y;
        this.r = r;
    }
    draw(context) {
        context.beginPath();
        const grd = context.createRadialGradient(this.x, this.y, this.r / 2, this.x, this.y, this.r);
        grd.addColorStop(0, `rgba(255,255,255,1)`);
        grd.addColorStop(1, `rgba(255,255,255,0.2)`);
        context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        context.fillStyle = grd;
        context.fill();
        context.closePath();
    }
}


// Draw black background
ctx0.fillStyle = "black";
ctx0.fillRect(0, 0, canvas0.width, canvas0.height);



// Draw Stars
for (let i = 0; i < 600; i++) {
    let x = Math.floor(Math.random() * canvas0.width);
    let y = Math.floor(Math.random() * canvas0.height);
    let r = Math.floor(Math.random() * 3);
    const star = new Star(canvas0, x, y, r);
    star.draw(ctx0);
}

let PlanetValues = {
    size: Math.floor(Math.random() * 200),
    colour: Math.floor(Math.random() * 360)
}


function setValue() {
    document.getElementById('sldSize').max = canvas2.width *0.45;
    const sizeValue = document.getElementById('sldSize').value;
    const colourValue = document.getElementById('sldColour').value;
    PlanetValues = {
        size: sizeValue,
        colour: colourValue
    }
    console.log(PlanetValues);
    drawPlanet()
}

function drawPlanet(){
ctx2.clearRect(0, 0, width, height)
const planet = new Planet(canvas2);
// let hue = Math.floor(Math.random() * 360);
planet.draw(ctx2 , PlanetValues.size, PlanetValues.colour);
}

drawPlanet()

// function randomTimer() {
//     const shootingStar = new ShootingStar(canvas1, 0, 0, 2, 3, 2);
//     shootingStar.animate()
//     setTimeout(randomTimer, Math.random() * 30000)
// }

// randomTimer()





