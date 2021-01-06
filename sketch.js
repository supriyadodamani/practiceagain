var a;
function setup() {
  createCanvas(800,400);
 a= createSprite(400, 200, 50, 50);
 a.shapeColor="red";
}

function draw() {
  background(255,255,255);  
  drawSprites();
}