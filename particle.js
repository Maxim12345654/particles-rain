export class Particle {
    constructor(canvas, brightnessArray,ctx) {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.px = Math.floor(this.x);
        this.py = Math.floor(this.y);
        this.speed = 0;
        this.size = 1;
        this.brightnessArray = brightnessArray;
        this.canvas = canvas;
        this.ctx = ctx;

    }
    update() {
        this.px = Math.floor(this.x);
        this.py = Math.floor(this.y);
        this.speed = this.brightnessArray[this.py][this.px];
        this.y += this.speed;
        if(this.y > this.canvas.height){
            this.y = 0;
        }
    }
    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = 'white';
        console.log(this.y);
        this.ctx.arc(this.x,this.y,this.size,0,Math.PI * 2);
        this.ctx.fill();

    }

}