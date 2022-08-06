let c1,c2;
let s=1,t=0;
let noiseMax = 0;
let slider;
let phase = 0;
let zoff = 0;

function setup() {
  createCanvas(600,600);
  backGradient();
  slider = createSlider(0, 200, 15, 0.01);

  slider.size(400);
  slider.position(width/2-200,height-100);
  
}

function windowResized() {
  // resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  backGradient();
  // circle(width/2,height/2,noiseMax*3);
  
  maku(width / 2, height / 2);
}

function maku(x, y) {
  translate(x, y);
 
  if(keyIsPressed) {
      if(keyCode == '32'){
      t = 2;
      s = lerp(s,t,0.2);
      scale(s);
      }
     }else{
      t = 1;
      s = lerp(s,t,0.2);
     scale(s);
     }

  let center = createVector(x,y);
  let mouse = createVector(mouseX,mouseY);
  let move = p5.Vector.sub(mouse,center);
  move.mult(1);
  
  let faceMove = move.copy();
  faceMove.mult(0.05);
  faceMove.limit(noiseMax/10);

  
  let eyeballMove = move.copy();
  eyeballMove.mult(0.08);
  eyeballMove.limit(noiseMax/4);
  
  let pupilMove = move.copy();
  pupilMove.mult(0.135);
  pupilMove.limit(noiseMax/2);
  
  
    push(); // 얼굴 본체
        translate(faceMove.x,faceMove.y);
        stroke(0);
        fill(0);
        beginShape();
        noiseMax = slider.value();
        for (let a = 0; a < TWO_PI; a += 0.01) {
          let xoff = map(sin(a), -1, 1, 0, noiseMax);
          let yoff = map(cos(a + phase), -1, 1, 0, noiseMax);
          let r = map(
          noise(xoff, yoff, zoff),0,1,noiseMax * 0.75,noiseMax * 1.25);
          let x = r * cos(a);
          let y = r * sin(a);
          vertex(x, y);
        }
    endShape(CLOSE);
    pop();
  
    push(); //좌측 눈
      translate(-noiseMax / 2.55, 0);
  
      push(); // 좌측 흰 눈
        translate(eyeballMove.x,eyeballMove.y);
  
        beginShape();
          for (let i = 0; i < TWO_PI; i += 0.01) {
          let xof = map(sin(i), -1, 1, 0, noiseMax / 50);
          let yof = map(cos(i), -1, 1, 0, noiseMax / 50);
          let r = map(noise(xof, yof, zoff), 0, 1, noiseMax / 2.6, noiseMax / 3);
          let x = r * sin(i);
          let y = r * cos(i);
            fill(255);
            noStroke();
            vertex(x, y);
            }
        endShape(CLOSE);
      pop();
  
      push(); // 좌측 검정 눈알
        translate(pupilMove.x,pupilMove.y);
        beginShape();
          for (let i = 0; i < TWO_PI; i += 0.01) {
          let xof = map(sin(i), -1, 1, 0, noiseMax / 50);
          let yof = map(cos(i), -1, 1, 0, noiseMax / 50);
          let r = map(noise(xof, yof, zoff), 0, 1, noiseMax / 2.6, noiseMax / 3);
          let x = r * sin(i);
          let y = r * cos(i);
            fill(0);
            noStroke();
            vertex(x/5, y/5);    
            }    
        endShape(CLOSE);

      pop();
  
    pop(); //좌측 눈
  
      push(); //우측 눈
      translate(noiseMax / 2.55, 0);
  
      push(); // 우측 흰 눈
        translate(eyeballMove.x,eyeballMove.y);
        beginShape();
          for (let i = 0; i < TWO_PI; i += 0.01) {
          let xof = map(sin(i), -1, 1, 0, noiseMax / 50);
          let yof = map(cos(i), -1, 1, 0, noiseMax / 50);
          let r = map(noise(xof, yof, zoff), 0, 1, noiseMax / 3, noiseMax / 2.6);
          let x = r * sin(i);
          let y = r * cos(i);
            fill(255);
            noStroke();
            vertex(x, y);    
            }
        endShape(CLOSE);
      pop();
  
      push(); // 우측 검정 눈알
        translate(pupilMove.x,pupilMove.y);
        beginShape();
          for (let i = 0; i < TWO_PI; i += 0.01) {
          let xof = map(sin(i), -1, 1, 0, noiseMax / 50);
          let yof = map(cos(i), -1, 1, 0, noiseMax / 50);
          let r = map(noise(xof, yof, zoff), 0, 1, noiseMax / 2.8, noiseMax / 2.4);
          let x = r * sin(i);
          let y = r * cos(i);
            fill(0);
            noStroke();
            vertex(x/5, y/5);    
            }    
        endShape(CLOSE);
        // zoff += 0.01;
      pop();
  
    pop(); //우측 눈
 
  zoff += 0.1;
  // noLoop();
}

function backGradient() {
  let c3 = map(noiseMax,0,200,0,255)

  c1 = color(0);
  c2 = color(c3);

  for (let y = 0; y < height; y++) {
    // Vertical Linear Gradient
    let colorStep = map(y, 0, height, 0, 1);
    let newc = lerpColor(c1, c2, colorStep);
    stroke(newc);
    line(0, y, width, y);
  }
}
