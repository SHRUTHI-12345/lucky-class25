const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground1=new ground(600,height,1200,20)

    box1 = new box(700,320,70,70)
    box2 = new box(920,320,70,70)
    pig1= new pigs(810,350)
    log1=new logs(810,260,300, PI/2)

    box3= new box(700,240,70,70)
    box4= new box(920,240,70,70)
    pig2= new pigs(810,220)
    log3=new logs(810,180,300, PI/2)

    box5= new box(810,160,70,70)
    log4=new logs(760,120,150, PI/7)
    log5=new logs(870,120,150, -PI/7)
   
    bird=new birds(100,100)
    




   
    


    /*var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution: 1.0
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);

    console.log(ground);*/
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    box2.display(); 
    ground1.display();
    pig1.display();
    pig1.display();

    box3.display();
    box4.display();
    pig2.display();
    log3.display();

    box5.display();
    log4.display(); 
    log5.display();

    bird.display();





   
}