const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies
var engine;
var ball;
var world;
var ball_options;
var ground_options;
var ground;
var rock;
var wall;
var angle=100;
var wedge;
function setup() {
  createCanvas(400,400);
  engine = Engine.create()
  world = engine.world
  ball_options={
    restitution:0.95,
    frictionAir:0.01
  }
  rock_options={
    restitution:0.65,
  }
  ground_options={
  isStatic:true
  }
  ball = Bodies.circle(100,10,20,ball_options)
  World.add(world,ball)
  rock = Bodies.circle(300,20,20,rock_options)
  World.add(world,rock)
  ground = Bodies.rectangle(200,390,400,20,ground_options)
  World.add(world,ground)
  wall = Bodies.rectangle(300,200,200,10,ground_options)
  World.add(world,wall)
  wedge = Bodies.rectangle(100,200,100,20,ground_options)
  World.add(world,wedge)
  rectMode(CENTER)
  ellipseMode(RADIUS)
}


function draw() 
{
 background("Purple")
 Engine.update(engine)
 Matter.Body.rotate(wedge,angle)
 push()
 translate(wedge.position.x,wedge.position.y)
 rotate(angle)
 rect(0,0,100,20)
 pop()
 angle+=0.12
 ellipse(ball.position.x,ball.position.y,20)
 rect(ground.position.x,ground.position.y,400,20)
 ellipse(rock.position.x,rock.position.y,20)
 rect(wall.position.x,wall.position.y,300,10)
}


