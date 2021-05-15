var hero,alien,people,house;
var heroimage;
var ground, Canvas;

function preload(){
    //heroimage =loadImage("images/hero.png");
    ground = loadImage("images/bg.png");
}


function setup(){
    Canvas = createCanvas(displayWidth - 100, displayHeight - 100);
    hero = new Hero();
}

function draw(){
    background("Orange");

    //create hero
    hero.xposition = mouseX;
    hero.yposition = mouseY;
    hero.width = 50;
    hero.height = 50;

    hero.display();
}
