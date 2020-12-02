
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5,roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	


	Engine.run(engine);

	bob1= new Bob(150,400,35,35);
	bob2= new Bob(220,400,35,35);
	bob3=new Bob(290,400,35,35);
  bob4=new Bob(360,400,35,35);
  bob5=new Bob(430,400,35,35);
  roof=new HangWall(100,100,70,50);
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  drawSprites();
  bob1.display();
  bob2.display();
  bob3.display();
 bob4.display();
 bob5.display();
 roof.display();
}



