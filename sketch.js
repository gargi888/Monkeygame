
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime = 0;
var score;

function preload(){

  monkey_running =      loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}


function setup() {
  //creating monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  //creating ground
  ground = createSprite(400,350,900,10);
  ground.velocityX = -10;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  //creating groups
  obstacleGroup = createGroup();
  FoodGroup = createGroup();
}


function draw() {
  background(255);
  
  //texting survivalTime
  var survivalTime = 0;
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time : "+ survivalTime,100,50); 
  
  if(ground.x < 0) {
    ground.x = ground.width/2;
  }
  
  //making monkey jump when space key is pressed
  if(keyDown("space") && monkey.y>240){
    monkey.velocityY = -12;   
  }
  
  //gravity for monkey
  monkey.velocityY = monkey.velocityY + 0.8;
  
  //making monkey collide with ground so that it do not fall
  monkey.collide(ground);
  
  Food();
  obstacles();
  drawSprites();
}


function Food() {
  if (frameCount % 80 === 0) {
    banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -10;
    banana.lifetime = 120;
    FoodGroup.add(banana);
    }
}


function obstacles() {
  if (frameCount % 300 === 0) {
    obstacle = createSprite(600,320,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.13;
    obstacle.velocityX = -10;
    obstacle.lifetime = 60;
    obstacleGroup.add(obstacle);
  }
}


