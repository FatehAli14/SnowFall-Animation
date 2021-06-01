const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground;
var bg,bgImg;
var snow=[];

function preload() {
  bgImg=loadImage("snow3.jpg"); 
}

function setup() {
  createCanvas(1500,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,5000,20);

  for (var i = 0; i < snow; i++){
    Snow.push(new Snow());  }
}
 


function draw() {
  background(bgImg);
  Engine.update(engine);

  if (frameCount % 60 === 0){
    snow.push(new Snow(random(width/2-20, width/2+20), 0,2));
  }

  for (var i = 0; i < snow.length ; i++){
    snow[i].display();
  }

  ground.display();

 
}




