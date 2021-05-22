const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world,ground,ball;

function setup() {
  createCanvas(800,400);
engine=Engine.create();
world=engine.world;

var groundOptions={
isStatic:true
}
ground=Bodies.rectangle(400,390,800,10,groundOptions)
World.add(world,ground)

var ballOptions={
restitution:1.3
}
ball=Bodies.circle(400,200,10,ballOptions)
World.add(world,ball);
}

function draw() {
  background("blue");
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,10)  
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
} 