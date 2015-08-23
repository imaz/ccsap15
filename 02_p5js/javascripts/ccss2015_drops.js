var CANVAS_WIDTH = 800;
var CANVAS_HEIGHT = 200;

var drops = [];
var paths = getPaths();

function setup(){
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}

function draw(){
  background(255);

  drawLogo(paths);

  if (frameCount % 3 === 0) {
    updateDrops();
  }
  drawDrops();
}

function getPaths(){
  var size = 1.0;
  var x = 0;
  var y = 0;
  return toAbsoluteSVG(CCSSJSON, size, x, y);
}

function drawLogo(paths){
  if (paths) {
    fill(233, 233, 233, 255);
    stroke(100, 100, 100, 255);
    drawSVG(paths);
  }
}

function updateDrops(){
  var drop = {
    a: random() * 10 + 60,
    r: random() * 225 + 30,
    g: random() * 225 + 30,
    b: random() * 225 + 30,
    x: mouseX + (random() * 50 - 25),
    y: mouseY + (random() * 50 - 25),
    dot_size: random() * 30 + 10
  };
  drops.push(drop);

  if (drops.length > 10) {
    drops.shift();
  }
}

function drawDrops(){
  if (mouseX == 0 && mouseY == 0) return;

  for (drop of drops) {
    ddd = drop;
    fill(drop['r'], drop['g'], drop['b'], drop['a']);
    stroke(drop['r'], drop['g'], drop['b'], drop['a'] + 20);
    ellipse(drop['x'], drop['y'], drop['dot_size'], drop['dot_size']);
  }
}
