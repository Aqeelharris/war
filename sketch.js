const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var box1,box2,box3,box4;
var box5,box6,box7,box8,box9,box10;
var slingshot;
var bird1;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  
   polygon =  createSprite(400, 200, 50, 50);

   box1 = new Box(330,235,30,40)
   box2 = new Box(360,235,30,40)
   box3 = new Box(390,235,30,40)
   box4 = new Box(420,235,30,40)
   box5 = new Box(450,235,30,40)

   box6 = new Box(480,195,30,40)
   box7 = new Box(510,195,30,40)
   box8 = new Box(540,195,30,40)

   box9 = new Box(570,155,30,40)
   box10 = new Box(600,155,30,40)

  slingshot = new SlingShot((bird.body,{x:200, y:50}));
   bird1 = new bird (200,50); 

   Engine.run(engine);
  
}
 


function draw() {
  background(255,255,255);
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  
  box6.display();
  box7.display();
  box8.display();
  
  box9.display();
  box10.display();

  slingshot.display();
  bird1.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  slingshot.fly();
}