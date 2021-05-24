const canvas = document.querySelector('#canvas1');
const ctx = canvas.getContext('2d');

canvas.style.border = '1px solid black';
/* Varibales cuadrado  */
let positionX = 450;
let positionY = 450;
let velocidadX = getRandomArbitrary(-3, 3);
let velocidadY = getRandomArbitrary(-3, 3);

let distanceSquare = Math.sqrt(velocidadX * velocidadX + velocidadY * velocidadY);

/* Varibales circulo  */
let positionXCircle = 250;
let positionYCircle = 250;
let velocidadXCirculo = getRandomArbitrary(-8, 8);
let velocidadYCirculo = getRandomArbitrary(-8, 8);
let CircleRadius = 100;

let distanceCircle = Math.sqrt(velocidadXCirculo * velocidadXCirculo + velocidadYCirculo * velocidadYCirculo);

function animation2D(){
    /*Este es el rectangulo */
    ctx.fillStyle = "blue";
    let square = ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillRect(positionX,positionY,150,150);
    /*Este es el circulo */
    ctx.beginPath();
    ctx.fillStyle = "red";
    let circle = ctx.arc(positionXCircle,positionYCircle, CircleRadius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    /*Posiciones cuadradas  */
    if(positionX > canvas.width - 150){
        velocidadX = -velocidadX;
    }
    if(positionX < 0){
        velocidadX = -velocidadX;
    }

    if(positionY > canvas.height - 150){
        velocidadY = -velocidadY;
    }
    if(positionY < 0){
        velocidadY = -velocidadY;
    }


    /*Posiciones circulares  */

    if(positionXCircle - CircleRadius  <= 0 ){
        velocidadXCirculo = -velocidadXCirculo; /*Como la posicion ya esta en -0.algo osea en negativo es por eso que se pone el negativo para que negativo mas negativo positivo */
    }

    if(positionXCircle + CircleRadius > canvas.width){
        velocidadXCirculo = -velocidadXCirculo; 
    }

    if(positionYCircle - CircleRadius  <= 0){
        velocidadYCirculo = -velocidadYCirculo;
    }

    if(positionYCircle + CircleRadius > canvas.height ){
        velocidadYCirculo = -velocidadYCirculo;
    }

    let dx = velocidadX - velocidadXCirculo;
    let dy = velocidadY - velocidadYCirculo;
    let z = Math.sqrt(dx * dx + dy * dy);

    if(z<CircleRadius){
        console.log('Collision detected')
    }

    positionX += velocidadX;
    positionY += velocidadY;
    /*Este es el circulo */
    positionXCircle += velocidadXCirculo;
    positionYCircle += velocidadYCirculo;
    window.requestAnimationFrame(animation2D);
}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
window.requestAnimationFrame(animation2D);