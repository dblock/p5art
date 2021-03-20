let sanguine: p5.Color;
let tr_x = 0;
let direction = 1;
let m = 10;
let c: p5.Renderer;
let iter = 0;

function setup() {
  c = createCanvas(windowWidth, windowHeight);
  rectMode(CENTER).noFill().frameRate(30);
  sanguine = color('#850505');
}

function draw() {
  background(255);
  translate(width / 2, height / 1.5);

  let x = width / 3;
  let y = width / 3;

  if (tr_x >= m) direction = -1;
  if (tr_x <= 1) direction = 1;

  tr_x = tr_x + direction * 0.25;

  push();
  fill(sanguine);
  quad(
    -x - tr_x, -y, 
    -x/2 + 2*tr_x, -y*1.5, 
    x*1.1-2*tr_x, -y*0.5, 
    -x*0.2, y*0.6-tr_x);
  pop();

  if (iter < 10) {
    iter += 1;
    // saveCanvas(c, "sanguine-" + iter.toString(), 'jpg');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
