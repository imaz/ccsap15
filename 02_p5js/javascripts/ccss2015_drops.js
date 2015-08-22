var CANVAS_WIDTH = 800;
var CANVAS_HEIGHT = 200;

function setup(){
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  background(255);

  var paths = getPaths();
  drawLogo(paths);
}

function draw(){
  drawDrops();
}

function drawLogo(paths){
  if (paths) {
    fill(233, 233, 233, 255);
    stroke(100, 100, 100, 255);
    drawSVG(paths);
  }
}

function getPaths(){
  size = 1.0;
  x = 0;
  y = 0;
  return toAbsoluteSVG(CCSSJSON, size, x, y);
}

function drawDrops(){
  var alpha = random() * 100 + 20;
  var r = random() * 224 + 30;
  var g = random() * 224 + 30;
  var b = random() * 224 + 30;
  fill(r, g, b, 30);
  stroke(100, 100, 100, 5);

  var x = random() * CANVAS_WIDTH;
  var y = random() * CANVAS_HEIGHT;
  var dot_size = random() * 50 + 20;
  ellipse(x, y, dot_size, dot_size)
}
