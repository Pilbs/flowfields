const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 350;
canvas.height = 450;


class Planet {
    constructor(canvas) {
        this.canvas = canvas;
        this.x = this.canvas.width / 2;
        this.y = this.canvas.height / 2;
        this.r = 50;
    }
    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        context.fillStyle = "red";
        context.fill();
        ctx.closePath();
        ctx.beginPath();
        // ctx.moveTo(this.x, this.y);
        // ctx.translate(0-this.r/2,this.y*2-this.r/2);
        // ctx.rotate((-90 * Math.PI / 180))
        ctx.fillStyle = "rgba(0,0,0,0.4)";
        ctx.moveTo(this.x-this.r, this.y);
        ctx.bezierCurveTo(this.x-this.r, this.y-this.r*1.33333, this.x+this.r, this.y-this.r*1.333333, this.x+this.r, this.y);
        ctx.bezierCurveTo(this.x+this.r, this.y-this.r, this.x-this.r, this.y-this.r, this.x-this.r, this.y);
        ctx.closePath();
        ctx.fill();
        
    }

}
ctx.fillStyle = "black";
ctx.fillRect(0,0,canvas.width,canvas.height);

const planet = new Planet(canvas);
planet.draw(ctx);

