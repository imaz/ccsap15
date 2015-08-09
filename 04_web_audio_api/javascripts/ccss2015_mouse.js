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

var SVG_RANDOM_DEFAULT = 5;
var svg_random = SVG_RANDOM_DEFAULT;

function getPaths(){
  if (mouseX === 0 && mouseY === 0) return null;

  var size = 1.0;
  var x = mouseX - 100 + random(svg_random);
  var y = mouseY - 100 + random(svg_random);
  return toAbsoluteSVG(CCSSJSON, size, x, y);
}
