var ground;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,survivalTime;
var randomM;
var invisibleGround;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
 monkey=createSprite(25,400,20,20);
 monkey.addAnimation("monkeyRun",monkey_running);
 monkey.scale=0.15;
 
  
 ground=createSprite(20,450,1600,15)
 ground.velocityX=-7;
  
 invisibleGround=createSprite(25,455,1600,15);
invisibleGround.visible=false;

  
}


function draw() {
   background("white");
  
  stroke("black")
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime:"+survivalTime,100,50)
  
    if(keyDown("space")  && monkey.y>=240 )  {
      monkey.velocityY = -12;
     
    }
      monkey.velocityY=monkey.velocityY+0.8;
    
//monkey.collide(ground);
   monkey.collide(invisibleGround)
  console.log(monkey.y)
  if (ground.x<0){
    ground.x=ground.width/2;
  }
  
 obstacles();
food();
  drawSprites();
    
}
function food(){
   if (frameCount%80===0){
  banana=createSprite(600,600,30,30) 
  banana.addImage(bananaImage);
  banana.scale=0.1
  banana.velocityX=-4
  banana.y=Math.round(random(120,200))
  banana.lifetime=200;
 
   FoodGroup=new Group();
 FoodGroup.add(banana)
   }
}

function obstacles(){
  if (frameCount%300===0){
  obstacle=createSprite(600,420,30,30)
  obstacle.addImage(obstaceImage)
  obstacle.velocityX=-6;
  obstacle.scale=0.2;
  obstacle.lifetime=100
  obstacleGroup=new Group();
  obstacleGroup.add(obstacle);
}
}



