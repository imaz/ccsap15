function setup(){
  createCanvas(800, 200);
  background(255);
  fill(233, 233, 233, 255);
  stroke(100, 100, 100, 255);
}

function draw(){
  drawSVG(paths());
}

function paths(){
  return toAbsoluteSVG(CCSSJSON, 1.0, mouseX, mouseY);
}
