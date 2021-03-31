let sanguine: p5.Color;
let c: p5.Renderer;
let saved = false;

function setup() {
  c = createCanvas(windowWidth, windowHeight);
  rectMode(CENTER).noFill().frameRate(30);
  sanguine = color('#850505');
}

function windowResized() {
  let shortest = min(windowWidth, windowHeight);
  resizeCanvas(shortest, shortest);
}

// draw a deformed rectangle 
function shape() {
  let shortest = min(windowWidth, windowHeight);

  let x = shortest / 3;
  let y = shortest / 3;

  noStroke();
  quad(
    -x, -y, 
    -x/3, -y*1.5, 
    x*1.1, -y*0.4, 
    -x*0.2, y*0.6
  );

  stroke(sanguine);
  let d = 1.5;

  push();
  translate(shortest/9, shortest/4.8)
  line(-x * d, -y * d, -x/3 * d, -y*1.5 * d)
  pop();

  push();
  translate(-shortest/15, shortest / 6.4)
  line(-x/3 * d, -y*1.5 * d, x*1.1*d, -y*0.4*d)
  pop();

  push();
  translate(-shortest/10, 0)
  line(x*1.1*d, -y*0.4*d, -x*0.2*d, y*0.6*d)
  pop();

  push();
  translate(shortest/12, 0)
  line(-x*d, -y*d, -x*0.2*d, y*0.6*d)
  pop();
}

function draw() {
  background(255);
  fill(sanguine);

  let shortest = min(windowWidth, windowHeight);
  let ll = 20;
  let hh = 0.8;
  let vv = 1.6;

  text("Разрез ушей, ворсистый мех", shortest/vv, shortest*hh);
  text("Приметы кошки чистокровной:", shortest/vv, shortest*hh+ll);
  text("Она имела бы успех", shortest/vv, shortest*hh+2*ll);
  text("И без отличной родословной.", shortest/vv, shortest*hh+3*ll);

  scale(0.5);
  translate(shortest / 2, shortest);
  shape();
  
  translate(shortest * 0.9, -shortest/4);
  scale(1, -1);
  shape();

  if (saved == false) {
    saveCanvas("cat1.jpg")
    saved = true;
  }
}
