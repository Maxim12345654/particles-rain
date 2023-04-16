import { Particle } from "./particle.js";

const image = new Image();
image.src = 'rain.jpg';
image.addEventListener('load', function () {
    const canvas = document.getElementById("canvas1");
    canvas.width = 781;
    canvas.height = 600;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    const pixelsArray = ctx.getImageData(0, 0, canvas.width, canvas.height);
    //  console.log(pixelsArray);
    const brightnessArray = [];
    let row = [];
    for (let i = 0; i < pixelsArray.data.length; i++) {
        if (i % 3124 === 0) {
            if (i !== 0) {
                brightnessArray.push(row);
            }
            row = [];
        }
        if (i % 4 === 0) {
            const red = pixelsArray.data[i];
            const green = pixelsArray.data[i + 1];
            const blue = pixelsArray.data[i + 2];
            const br = calculateBrightness(red, green, blue);
            row.push(br);
        }
    }
    brightnessArray.push(row);
    console.log(brightnessArray)
    function calculateBrightness(r, g, b) {
        return Math.sqrt((r * r) * 0.299 + (g * g) * 0.587 + (b * b) * 0.114) / 100;
    }
    /////////////////////////////////////////////////////////////////////
    const particlesArray = [];
    for (let i = 0; i < 5000; i++) {
        particlesArray.push(new Particle(canvas, brightnessArray,ctx));
    }
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
    }


    animate();
});