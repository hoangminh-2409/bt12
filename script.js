let canvas = document.getElementById('myCanvas');
let context = canvas.getContext('2d')
let x = 20, y = 20;
let dx = 5, dy = 6;


function greenball () {
    context.beginPath();
    context.arc(x, y, 20, 0, Math.PI * 2);
    context.fillStyle = '#00CC00';
    context.fill();
    context.closePath();

}

setInterval(function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (x < 0 || x > canvas.width) {
        dx = - dx
    }
    if (y < 0 || y > canvas.height) {
        dy = - dy
    }
    greenball();
    x = x + dx;
    y = y + dy;
}, 20)







