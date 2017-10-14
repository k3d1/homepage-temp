var canvas;
var stars = [];
var starsAmount = 200;
var ship;
var img;

/*function preload() {
    img = loadImage('images/ship.png');
}*/

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    img = loadImage('images/ship.png');
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    //draws canvas behind the html
    canvas.style('z-index', '-1');
    for (var i = 0; i < starsAmount; i++) {
        stars[i] = new Stars();
    }
    ship = new Ship();
    
}

function draw() {
    background(20);
    for (var i = 0; i < starsAmount; i++) {
        stars[i].render();
        stars[i].update();
    }
    ship.render();
    ship.update();
}
