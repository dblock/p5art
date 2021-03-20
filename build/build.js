var sanguine;
var tr_x = 0;
var direction = 1;
var m = 10;
var c;
var iter = 0;
function setup() {
    c = createCanvas(windowWidth, windowHeight);
    rectMode(CENTER).noFill().frameRate(30);
    sanguine = color('#850505');
}
function draw() {
    background(255);
    translate(width / 2, height / 1.5);
    var x = width / 3;
    var y = width / 3;
    if (tr_x >= m)
        direction = -1;
    if (tr_x <= 1)
        direction = 1;
    tr_x = tr_x + direction * 0.25;
    push();
    fill(sanguine);
    quad(-x - tr_x, -y, -x / 2 + 2 * tr_x, -y * 1.5, x * 1.1 - 2 * tr_x, -y * 0.5, -x * 0.2, y * 0.6 - tr_x);
    pop();
    if (iter < 10) {
        iter += 1;
    }
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
//# sourceMappingURL=../sketch/sketch/build.js.map