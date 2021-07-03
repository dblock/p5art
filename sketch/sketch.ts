let sanguine: p5.Color;
let c: p5.Renderer;
let lines = 10;

function setup() {
  c = createCanvas(640, 640);
  rectMode(CENTER).noFill().frameRate(1/3);
  sanguine = color('#850505');
  textFont("Impact", windowHeight / lines);
  textAlign(CENTER, CENTER);
  background(255);
  fill(sanguine);
}

function addSpace(s: string, count: number) {
  let result = "";
  for (let i = 0; i < count; i++) {
    let index = random(0, s.length + 1);
    result += s.substr(0, index) + " " + s.substr(index);
  } 
  return result;
}

function draw() {
  clear();
  translate(width/2-width/lines/3, height/lines/2);
  for (let i = 0; i < lines; i++) {
    text(addSpace("ALARMED", 3), 0, 0);
    translate(0, height / lines);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
