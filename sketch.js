let x0 = 0;
let y0 = 0;
let x1 = 0;
let y1 = 0;
let x2 = 0;
let y2 = 0;
let x3 = 0;
let y3 = 0;
let x4 = 0;
let y4 = 0;

let bg;
let forder;
let img0;
let img1;
let img2;
let img3;
let img4;

let s = 1;
let target = 1.5;

function preload() {
  img0 = loadImage("asset/0.webp");
  img1 = loadImage("asset/1.webp");
  img2 = loadImage("asset/2.webp");
  img3 = loadImage("asset/3.webp");
  img4 = loadImage("asset/4.webp");

  // folder = loadImage("asset/folder.png");
  bg = loadImage("asset/bubble.jpg");
}

function setup() {
  // createCanvas(565.6 * 2, 424.2 * 2);
  createCanvas(windowWidth, windowHeight);

  cursor(HAND);
  //cursor('grab');
  //   push();

  //     translate(35, 35);
  //     scale(1);

  //     imageMode(CENTER);
  //     image(folder, 0, 0, 60, 60);
  //     image(folder, 0, 70, 60, 60);
  //     image(folder, 0, 140, 60, 60);
  //     image(folder, 0, 210, 60, 60);
  //     image(folder, 0, 280, 60, 60);

  //   pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(bg);
  krug();
}

function krug() {
  push();
  imageMode(CENTER);

  x4 = lerp(x4, x3, 0.04);
  y4 = lerp(y4, y3, 0.04);

  x3 = lerp(x3, x2, 0.04);
  y3 = lerp(y3, y2, 0.04);

  x2 = lerp(x2, x1, 0.04);
  y2 = lerp(y2, y1, 0.04);

  x1 = lerp(x1, x0, 0.04);
  y1 = lerp(y1, y0, 0.04);

  x0 = lerp(x0, mouseX, 0.04);
  y0 = lerp(y0, mouseY, 0.04);

  //background("white");
  noStroke();

  //tint(255,125);

  s = lerp(s, target, 0.035);

  image(img4, x4, y4, 56 * s, 175 * s);
  image(img3, x3, y3, 56 * s, 175 * s);
  image(img2, x2, y2, 56 * s, 175 * s);
  image(img1, x1, y1, 56 * s, 175 * s);
  image(img0, x0, y0, 56 * s, 175 * s);
  pop();
}

function mouseClicked() {
  target = target + 0.5;
}
