var sanguine;
var c;
var angle = 0.0;
function setup() {
    c = createCanvas(640, 640);
    rectMode(CENTER).noFill().frameRate(120);
    sanguine = color('#000000');
    textFont("Big Caslon", windowHeight / 3);
    textAlign(CENTER, CENTER);
    background(255);
    fill(sanguine);
    angleMode(DEGREES);
}
function draw() {
    clear();
    translate(width / 2, height / 2);
    rotate(angle);
    if (angle === 180) {
        frameRate(1 / 5);
        angle = 0;
    }
    else if (angle == 1) {
        frameRate(120);
    }
    angle++;
    text("1961", 0, 0);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
//# sourceMappingURL=../sketch/sketch/build.js.map