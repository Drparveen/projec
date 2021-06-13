var bg
var gym 
var drink 
var sleep 
var move 
var eat
var brush
var astonomer
function preload(){
bg = loadImage("images/iss.png");
sleep=loadAnimation("images/sleeping.png");
brush=loadAnimation("images/brushing.png");
gym=loadAnimation("images/gym21.png","images/gym22.png");
eat=loadAnimation("image/eat.png");
drink=loadAnimation("image/drin.png");
move=loadAnimation("image/move.png")

}

function setup() {
  createCanvas(800,400);
 astronomer= createSprite(300,230);
astronomer.addAnimation("sleeping",sleep);
astronomer.scale=0.1
}

function draw() {
  background("pink");  
if(keyDown("UP_ARROW")){
astronomer.addAnimation("brushing",brush);
astronomer.changeAnimation("brushing");
astronomer.y=350;
astronomer.velocityX=0;
astronomer.velocityY=0;
}
if(keyDown("DOWN_ARROW")){
astronomer.addAnimation("gym21",gym);
astronomer.changeAnimation("gym21");
astronomer.y=350;
astronomer.velocityX=0;
astronomer.velocityY=0;
}
if(keyDown("left_ARROW")){
astronomer.addAnimation("eating",eat);
astronomer.changeAnimation("eating");
astronomer.y=350;
astronomer.velocityX=0;
astronomer.velocityY=0;
}
if(keyDown("RIGHT_ARROW")){
astronomer.addAnimation("bathing",bg);
astronomer.changeAnimation("bathing");
astronomer.y=350;
astronomer.velocityX=0;
astronomer.velocityY=0;
}
if(keyDown("UP_ARROW")){
astronomer.addAnimation("moving",move);
astronomer.changeAnimation("moving");
astronomer.y=350;
astronomer.velocityX=1;
astronomer.velocityY=1;
}
  drawSprites();
}