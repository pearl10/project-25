
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

var log2,log1,log3;
var ground;

function preload(){

}

function setup() {
	createCanvas(800, 700);

  
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	Engine.run(engine);
	
	ground=new Ground(400,680,800,40)
	ball=new Ball(175,675);
	
	
	Log2=new Bin(550,660,20,250,20);
	Log1=new Bin2(650,660,20,250,20);
	Log3=new Bin3(600,750,250,20,20);
	

	
}                                       


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
 ball.display();
 
 
 Log2.display();
 Log1.display();
 Log3.display();

 
 ground.display();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
	
	Matter.Body.applyForce(ball.body,ball.body.position,{x:110,y:-110});
	
	
	}
	
	
	
	
	
	
	
	}
	
	










