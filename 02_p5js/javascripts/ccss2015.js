function setup(){
  createCanvas(800, 200);
  background(255);
  fill(233, 233, 233, 255);
  stroke(100, 100, 100, 255);
}

function draw(){
  paths = getPaths();
  if (paths) {
    drawSVG(paths);
  }
}

function getPaths(){
  if (mouseX == 0 && mouseY == 0) return null;

  size = 1.0;
  x = mouseX - 100;
  y = mouseY - 100;
  return toAbsoluteSVG(CCSSJSON, size, x, y);
}
