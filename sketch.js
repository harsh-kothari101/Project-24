const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,bin1,bin2,bin3,ground

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100,420,40);
	bin1 = new Bin(width/1.2,height-40,125,20);
	bin2 = new Bin(width/1.28,height-93,20,125);
	bin3 = new Bin(width/1.129,height-93,20,125);
	ground = new Ground(600,690,1200,30);
	
	Engine.run(engine);
  
}


function draw() {
  background("lightblue");
 
  Engine.update(engine);

  paper.display();
  bin1.display();
  bin2.display();
  bin3.display();
  ground.display();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}


