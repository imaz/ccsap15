static final int WINDOW_WIDTH = 500;
static final int WINDOW_HEIGHT = WINDOW_WIDTH;
static final float CANVAS_WIDTH = 400;
static final float CANVAS_HEIGHT = CANVAS_WIDTH;

void setup(){
  size(WINDOW_WIDTH, WINDOW_HEIGHT);
  background(#110030);
  // double_rect();
  canvas();
  logo();
  draw();
}

void draw(){
  int num=int(map(mouseX, 0, width, 1, 11));
}

void logo(){
  radial_line(340, 300);
}

void triangl(float x, float y, float w, float h){
}

void radial_line(float w, float h){
  fill(#DDBCE5);
  stroke(#FFFFFF);
  
  float x_start = (WINDOW_WIDTH - w) / 2;
  float x_end = x_start + w;
  float y_start = (WINDOW_HEIGHT - h) / 2;
  float y_end = y_start + h;
  
  for(int i=0; i < w; i+=10){
    line(x_start, y_start, x_start + i, y_start + h);
  }
}

void canvas(){
  fill(200, 100, 244, 30);
  stroke(#FFFFFF);
  float x_start = (WINDOW_WIDTH - CANVAS_WIDTH) / 2;
  float y_start = (WINDOW_HEIGHT - CANVAS_HEIGHT) / 2;
  rect(x_start, y_start, CANVAS_WIDTH, CANVAS_HEIGHT);
}

void double_rect(){
  fill(#DDBCE5);
  stroke(#FFFFFF);
  rect(50, 100, 300, 300);

  fill(#AABCF5);
  stroke(#FFFFFF);
  rect(150, 130, 300, 300);
}

