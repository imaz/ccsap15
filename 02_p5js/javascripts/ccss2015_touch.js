Number.prototype.between = function(a, b) {
  var min = Math.min(a, b);
  var max = Math.max(a, b);

  return this >= min && this <= max;
};

var CANVAS_WIDTH = 800;
var CANVAS_HEIGHT = 200;

var drops = [];
var PATHS = getPaths();
var showLogoIndices = [];
var showPaths = [];
var typeRanges = setTypeRanges();

function setup(){
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}

function draw(){
  background(255);

  if (frameCount % 3 === 0) {
    updateDrops();
  }
  drawDrops();

  updateLogo();
  drawLogo();
}

function getPaths(){
  var size = 1.0;
  var x = 0;
  var y = 0;
  return toAbsoluteSVG(CCSSJSON, size, x, y);
}

function updateLogo(){
  var upranges = typeRanges.filter(function(range){
    return range['min'] <= mouseX && mouseX <= range['max'];
  });
  var upranges_indices = upranges.map(function(range){ return range['index'] });

  showLogoIndices = showLogoIndices.concat(upranges_indices).filter(function (x, i, self) {
    return self.indexOf(x) === i;
  });

  showPaths = showLogoIndices.map(function(logoindex){ return PATHS[logoindex] });
}

function drawLogo(){
  if (showPaths.length) {
    fill(233, 233, 233, 150);
    stroke(151, 151, 151, 150);
    drawSVG(showPaths);
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
    fill(drop['r'], drop['g'], drop['b'], drop['a']);
    stroke(drop['r'], drop['g'], drop['b'], drop['a'] + 20);
    ellipse(drop['x'], drop['y'], drop['dot_size'], drop['dot_size']);
  }
}

function setTypeRanges() {
  return PATHS.map(function(letter, i){
    var letter_vertices = letter.map( function(char){ return char.x } ).filter( function(v){return v != undefined} );
    var range = {
      min: Math.min.apply(null, letter_vertices),
      max: Math.max.apply(null, letter_vertices)
    };
    range['index'] = i;
    return range;
  });
}
