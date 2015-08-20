function setup(){
  createCanvas(800, 200);
  background(255);
  fill(233, 233, 233, 255);
  stroke(100, 100, 100, 255);
}

function draw(){
  background(255);

  paths = getPaths();
  if (paths) {
    drawSVG(paths);
  }
}

function getPaths(){
  size = 1.0;
  x = 0;
  y = 0;
  return toAbsoluteSVG(CCSSJSON, size, x, y);
}
