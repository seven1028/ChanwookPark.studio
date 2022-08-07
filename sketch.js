var masterSlider;
var sliders = [];
var angle = 50;

function setup() {
  // noCanvas();
  // createCanvas(windowWidth,windowHeight);
  var can = createCanvas(windowWidth, windowHeight);
  can.position(0, 0);
  masterSlider = createSlider(0, 255, 125);
  masterSlider.size(400);

  for (var i = 0; i < 200; i++) {
    sliders[i] = createSlider(0, 255, angle);
  }

  noStroke();
  fill(255, 255, 255, 255);
  rectMode(CENTER);
  rect(windowWidth / 2, height - 90, 500, 60, 10);

  // sliders[0].input(draw);
  //sliders[0]을 조작할때에 뒷 함수에다가 값을 넣어라.
}

function draw() {
  masterSlider.position(windowWidth / 2 - 200, height - 100);

  sliderWave();
}

function sliderWave() {
  var offset = 0;
  var offsetValue = map(masterSlider.value(), 0, 255, 0, 0.2);
  // var size = map(masterSlider.value(), 0, 255, 10, 100);
  // sliders[i].size(50);

  angle += offsetValue;

  for (var i = 0; i < sliders.length; i++) {
    var x = map(sin(angle + offset), -1, 1, 0, 255);
    sliders[i].value(x);
    offset += 0.1;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, height);
}
