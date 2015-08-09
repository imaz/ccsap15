function setup(){
  createCanvas(800, 200);
}

var fill_random = 233;

function draw(){
  background(0, 0, 0);

  paths = getPaths();
  if (paths) {
    fill(180, fill_random, 233, fill_random);
    stroke(100, 100, 100, 255);
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
