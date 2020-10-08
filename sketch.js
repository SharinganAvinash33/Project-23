var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, BB1, BB2, BB3, BB4;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	BB1=new BoxBody(300,610,10,100);
 	BB2=new BoxBody(377.5,655,146,10);
 	BB3=new BoxBody(450,610,10,100);
 	BB4=new BoxBody(377.5,640,146,10);

 	Engine.run(engine);
	

  
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();

  BB1.display();
  BB2.display();
  BB3.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyDown("DOWN_ARROW")) {
Matter.Body.setStatic(packageBody,false);
}
}