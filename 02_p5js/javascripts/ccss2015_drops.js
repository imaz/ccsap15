var CANVAS_WIDTH = 800;
var CANVAS_HEIGHT = 200;

function setup(){
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  background(255);
}

function draw(){
  background(255);

  paths = getPaths();
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
