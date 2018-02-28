var x = 0;
var y = 0;
function setup() {
  createCanvas(720, 400);
 
}

function draw() {
{
  background(5,255,15);
  stroke(255,255,0);
  fill(255,255,0);
  ellipse(30, y, 50, 50);
    y = y + 1;
}{
  stroke(100);
  fill(255,0,0);
  rect(x,345,50,50);  
    x = x + 1;
}
}
