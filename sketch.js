
function setup() {
  createCanvas(900, 400);
  background(255);

}

var x = 60;
var y = 60

function draw() {
  background(0);

  fill(210);
  if(keyIsPressed){
  if(keyCode == LEFT_ARROW){
    x = x - 5;
  } if(keyCode == RIGHT_ARROW){
    x = x + 5;
  } if(keyCode == UP_ARROW){
    y = y - 5;
  } else if(keyCode == DOWN_ARROW){
    y = y + 5;
  }
}
  noStroke();
  rect(x, y, 30, 30)

  if(keyIsPressed){
  if(key == 'd'){
  stroke(255, 0, 0);
  line(x+30, y, 900, y);
  }
}
}
