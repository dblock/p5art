let sanguine: p5.Color;
let c: p5.Renderer;

function setup() {
  c = createCanvas(640, 640);
  rectMode(CENTER).noFill().frameRate(1/5);
  sanguine = color('#850505');
  textFont("Impact", windowHeight / 4);
  textAlign(CENTER, CENTER);
  background(255);
  fill(sanguine);
}

function draw() {
  let s = (second() % 2 == 1) ? 'DANGER' : 'DANCER';
  clear();
  translate(width / 2, height / 2);
  text(s, 0, 0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
