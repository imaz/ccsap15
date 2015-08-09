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

var SVG_ADJUSTMENT_Y_DEFAULT = 0;
var svg_adjustment_y = SVG_ADJUSTMENT_Y_DEFAULT;

function getPaths(){
  if (mouseX === 0 && mouseY === 0) return null;

  var size = 1.0;
  var x = mouseX - 100 + random(5);
  var y = mouseY - 100 + random(5) + svg_adjustment_y;
  return toAbsoluteSVG(CCSSJSON, size, x, y);
}
