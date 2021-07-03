var sanguine;
var c;
var lines = 10;
function setup() {
    c = createCanvas(640, 640);
    rectMode(CENTER).noFill().frameRate(1 / 3);
    sanguine = color('#850505');
    textFont("Impact", windowHeight / lines);
    textAlign(CENTER, CENTER);
    background(255);
    fill(sanguine);
}
function addSpace(s, count) {
    var result = "";
    for (var i = 0; i < count; i++) {
        var index = random(0, s.length + 1);
        result += s.substr(0, index) + " " + s.substr(index);
    }
    return result;
}
function draw() {
    clear();
    translate(width / 2 - width / lines / 3, height / lines / 2);
    for (var i = 0; i < lines; i++) {
        text(addSpace("ALARMED", 3), 0, 0);
        translate(0, height / lines);
    }
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
//# sourceMappingURL=../sketch/sketch/build.js.map