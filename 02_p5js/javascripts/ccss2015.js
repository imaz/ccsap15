var paths;

function setup(){
  paths = toAbsoluteSVG(CCSSJSON, 1.0, 0, 0);

  createCanvas(800, 200);
  background(255);
  fill(233, 233, 233, 255);
  stroke(100, 100, 100, 255);
}

function draw(){
  drawSVG(paths);
}
