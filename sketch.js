const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var ground;
var pig;
var log;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(300,200,50,50);
    ground= new Ground(200,390,400,20);
    pig=new Pig(250,350);
    log=new Log(200,100,100,PI/2);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   box2.display();
   ground.display();
   pig.display();
   log.display();

}