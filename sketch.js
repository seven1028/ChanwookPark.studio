let particles = [];
let res = 3;
let img;
var vid;

function preload() {
  img = loadImage("text.png");
}

function setup() {
  createCanvas(1280,720);
  vid = createVideo("vid2.mp4",playVideo);

  
  placeParticles();
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

function draw() {
  image(vid,0,0);

  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
  }
}

function placeParticles() {
  for (let i = 0; i < width; i += res)
    for (let j = 0; j < height; j += res) {
      let x = (i / width) * img.width;
      let y = (j / height) * img.height;
      let c = img.get(x, y);

      if (c[3] != 0) {
        particles.push(new Particle(i, j, c));
      }
    }
}

class Particle {
  constructor(x, y, c) {
    this.x = x;
    this.y = y;

    this.c = c;

    this.homeX = x;
    this.homeY = y;
  }

  update() {
    //mouse
    let mouseD = dist(this.x, this.y, mouseX, mouseY);
    let mouseA = atan2(this.y - mouseY, this.x - mouseX);

    //home
    let homeD = dist(this.x, this.y, this.homeX, this.homeY);
    let homeA = atan2(this.homeY - this.y, this.homeX - this.x);

    //forces
    let mouseF = constrain(map(mouseD, 0, 50, 50, 0), 0, 100);
    let homeF = map(homeD, 0, 50, 0, 10);

    let vx = cos(mouseA) * mouseF;
    vx += cos(homeA) * homeF;

    let vy = sin(mouseA) * mouseF;
    vy += sin(homeA) * homeF;

    this.x += vx;
    this.y += vy;
  }

  show() {
    drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = 'white';  
    
    noStroke();
    fill(255);
    circle(this.x, this.y, 3);
  }
}

function playVideo() {
  vid.size(1280);
  vid.volume(0);
  vid.loop();
  // vid.hide();
}

