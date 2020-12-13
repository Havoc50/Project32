const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg, ground, box;
var polygon, slingshot;
var score = 0;
var bg = "white";

function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
    getBackgroundImage();
}

function setup(){
    var canvas = createCanvas(1600,800);
    engine = Engine.create();
    world = engine.world;

    //ground
    ground1 = new Ground(800, height, 1650, 20);
    ground2 = new Ground(700, height/1.5, 400, 20);
    ground3 = new Ground(1200, height/2, 300, 20);
    
    //layer1.1
    box1 = new Box(550, 500, 50, 50);
    box2 = new Box(600, 500, 50, 50);
    box3 = new Box(650, 500, 50, 50);
    box4 = new Box(700, 500, 50, 50);
    box5 = new Box(750, 500, 50, 50);
    box6 = new Box(800, 500, 50, 50);
    box7 = new Box(850, 500, 50, 50);

    //layer1.2
    box8 = new Box(600, 450, 50, 50);
    box9 = new Box(650, 450, 50, 50);
    box10 = new Box(700, 450, 50, 50);
    box11 = new Box(750, 450, 50, 50);
    box12 = new Box(800, 450, 50, 50);

    //layer1.3
    box13 = new Box(650, 400, 50, 50);
    box14 = new Box(700, 400, 50, 50);
    box15 = new Box(750, 400, 50, 50);

    //layer1.4
    box16 = new Box(700, 350, 50, 50);


    //layer2.1
    box17 = new Box(1100, 380, 50, 50);
    box18 = new Box(1150, 380, 50, 50);
    box19 = new Box(1200, 380, 50, 50);
    box20 = new Box(1250, 380, 50, 50);
    box21 = new Box(1300, 380, 50, 50);

    //layer2.2
    box22 = new Box(1150, 330, 50, 50);
    box23 = new Box(1200, 330, 50, 50);
    box24 = new Box(1250, 330, 50, 50);

    //layer2.3
    box25 = new Box(1200, 280, 50, 50);
    
    polygon = new Polygon(200, 410);
    slingshot = new Slingshot(polygon.body, {x:200, y:400});

}

function draw(){

    background(bg);

    textSize(30);
    fill("white");    
    text("Score: " + score, width - 200, 50);
    
    textSize(20);
    fill("black");    
    text("If background is white, please reload and wait a little", width - 500, height - 20);

    Engine.update(engine);

    strokeWeight(2);
    ground1.display();
    ground2.display();
    ground3.display();

    strokeWeight(2);
    box1.display();
    box1.score();
    box2.display();
    box2.score();
    box3.display();
    box3.score();
    box4.display();
    box4.score();
    box5.display();
    box5.score();
    box6.display();
    box6.score();
    box7.display();
    box7.score();

    strokeWeight(2);
    box8.display();
    box8.score();
    box9.display();
    box9.score();
    box10.display();
    box10.score();
    box11.display();
    box11.score();
    box12.display();
    box12.score();

    strokeWeight(2);
    box13.display();
    box13.score();
    box14.display();
    box14.score();
    box15.display();
    box15.score();
    
    strokeWeight(2);
    box16.display();
    box16.score();

    strokeWeight(2);
    box17.display();
    box17.score();
    box18.display();
    box18.score();
    box19.display();
    box19.score();
    box20.display();
    box20.score();
    box21.display();
    box21.score();

    strokeWeight(2);
    box22.display();
    box22.score();
    box23.display();
    box23.score();
    box24.display();
    box24.score();
    
    strokeWeight(2);
    box25.display();
    box25.score();

    strokeWeight(2);
    polygon.display();
    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(polygon.body, {x: 200, y: 410});
        slingshot.attach(polygon.body);
    }
}

async function getBackgroundImage(){
    
    var response = await fetch("http://worldtimeapi.org/api/timezone/asia/kolkata");
    var responseJSON = await response.json(); 
    var daytime = responseJSON.datetime;
    var hour = daytime.slice(11,13);
    if(hour >= 06 && hour < 19){
        bg = "lightblue";
    }
     else{
         bg = "midnightblue";
    }

}