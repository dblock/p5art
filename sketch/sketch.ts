let sanguine: p5.Color;
let c: p5.Renderer;

function setup() {
  c = createCanvas(640, 640);
  rectMode(CENTER).noFill().frameRate(1/2);
  sanguine = color('#000000');
  textFont("Impact", windowHeight / 4);
  textAlign(CENTER, CENTER);
  background(255);
  fill(sanguine);
}

function addSpace(s: string, count: number) {
  for (let i = 0; i < count; i++) {
    let index = random(0, s.length - 1);
    s = s.substr(0, index) + " " + s.substr(index);
  } 
  return s;
}

function draw() {
  clear();
  translate(width/2, height/2);
  text(addSpace("ARMED", 2), 0, 0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
