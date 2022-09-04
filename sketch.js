let poop, bg;
let poodle, clover, clouds;
let n = 2;
let numClover = 60,
  numClouds = 30;
let i = 0;
let x, y;

let speedX = 4;
let speedY = 2;

function preload() {
  poodle = loadImage("assets/walkingPoodle.gif");
  pooping = loadImage("assets/poopingPoodle.webp");
  clover = loadImage("assets/4leafClover.webp");
  clouds = loadImage("assets/clouds.webp");
  bg = loadImage("assets/bg.JPG");
}

function setup() {
  createCanvas(600, 600);

  poop = createGraphics(width, height);
  // skyGradient();
  // makeClover();
  x = 0;
  y = 100;
}

function draw() {
  background(bg);

  x += speedX;
  y += speedY;
  if (x < 0 || x > width) {
    speedX *= -1;
  }
  if (y < 0 || y > height/2-100) {
    speedY *= -1;
  }
  push();
  imageMode(CENTER);
  image(clouds, x, y, 96, 96);
  pop();
  
  image(poop, 0, 0);
  mouse();
}

function mouseDragged() {
  poop.fill(random(0,50));
  poop.noStroke();
  poop.circle(mouseX + 20 + 54 * n, mouseY - 30 + 58 * n, random(5, 20));
}

function makeClover() {
  for (let i = 0; i < numClover; i++) {
    let s = random(0.3, 1);
    image(clover, random(0, width), random(height / 2, height), 72 * s, 77 * s);
  }
  for (let i = 0; i < numClouds; i++) {
    let s = random(0.3, 1);
    image(
      clouds,
      random(0, width),
      random(0, height / 2 - 100),
      48 * s * 2,
      48 * s * 2
    );
  }
}

function mouse() {
  if (mouseIsPressed) {
    image(pooping, mouseX + 20, mouseY - 30, 64 * n, 64 * n);
  } else {
    image(poodle, mouseX + 20, mouseY - 30, 64 * n, 64 * n);
  }
}

function skyGradient() {
  let c1 = color(0, 150, 255);
  let c2 = color(255);

  for (let y = 0; y < height / 2; y++) {
    let colorStep = map(y, 0, height / 2, 0, 1);
    let newc = lerpColor(c1, c2, colorStep);
    stroke(newc);
    line(0, y, width, y);
  }
}
