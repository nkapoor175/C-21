var fixedRect, movingRect;
var car,wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car = createSprite(200,150,30,30);
  car.velocityX = 4;
  car.shapeColor = "green";

  wall = createSprite(800,150,30,100);
  wall.shapeColor = "pink";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  

  bounceOff(car,wall);
  
  if (isTouching(movingRect,fixedRect)) {
    movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  drawSprites();
}
