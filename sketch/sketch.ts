let sanguine: p5.Color;
let c: p5.Renderer;
let lines = 10;

function setup() {
  c = createCanvas(640, 640);
  rectMode(CENTER).noFill().frameRate(1/3);
  sanguine = color('#000000');
  textFont("Impact", windowHeight / lines);
  textAlign(CENTER, CENTER);
  background(255);
  fill(sanguine);
}

function addSpace(s: string, spaces: number, count: number) {
  let result = "";
  for (let i = 0; i < count; i++) {
    let t = s;
    for (let j = 0; j < spaces; j++) {
      let index = random(0, t.length + 1);
      t = t.substr(0, index) + " " + t.substr(index);
    }
    result += t;
  } 
  return result;
}

function draw() {
  clear();
  translate(width/2-width/lines/3, height/lines/2);
  for (let i = 0; i < lines; i++) {
    text(addSpace("ARMED", 2, 3), 0, 0);
    translate(0, height / lines);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
