const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var robber, robberImage;
var police1, police2, policeImage;

function preload() {

robberImage = loadImage("images/ROBBER_2.png");
policeImage = loadImage("images/POLICE.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight-115);
  engine = Engine.create();
	world = engine.world;
  
  //creating robber
  robber = createSprite(displayWidth-70,displayHeight/2-115,10,10);
  robber.addImage(robberImage);
  robber.scale = 0.1;
  
  //creating police (1,2)
  police1 = createSprite(displayWidth/2, 100,10,10);
  police1.addImage(policeImage);
  police1.scale = 0.1;
  police2 = createSprite(displayWidth/2-250, 550,10,10);
  police2.addImage(policeImage);
  police2.scale = 0.1;
  
  
  
  
  
  Engine.run(engine);
}

function draw() {
  background("white");  
  
  // to move robber
  if(keyDown("up")){
    robber.y = robber.y - 10;
  } else if(keyDown("down")){
    robber.y = robber.y + 10;
  } else if(keyDown("left")){
    robber.x = robber.x - 10;
  } else if(keyDown("right")){
    robber.x = robber.x + 10;
  } 
  
  
  
  
  
  drawSprites();
}