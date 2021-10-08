var bg;
var sleep, brush, gym, eat, drink, move;
var astronaut;

function preload(){
bg= loadImage("iss.png");
sleep = loadAnimation("sleep.png");
brush = loadAnimation("brush.png");
gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
eat = loadAnimation("eat1.png","eat2.png");
drink = loadAnimation("drink1.png","drink2.png");
move = loadAnimation("move.png","move1.png");
}

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(220);
  
  astronaut = createSprite(300,230);
  astronaut.addAnimation("moving",move);
  astronaut.scale = 0.1;

 if(keyDown("up_arrow")){
   astronaut.addAnimation("brushing",brush);
   astronaut.changeAnimation("brushing");
   astronaut.y = 350;
   astronaut.velocityX = 0;
   astronaut.velocityY = 0;
 }

 if(keyDown("down_arrow")){
  astronaut.addAnimation("gymming",gym);
  astronaut.changeAnimation("gymming");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}
if(keyDown("right_arrow")){
  astronaut.addAnimation("eating",eat);
  astronaut.changeAnimation("eating");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}
}