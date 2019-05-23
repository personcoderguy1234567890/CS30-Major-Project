// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let ballStuff;
let lineCh;
let xCor;
let yCor;
let ballImage;

function setup() {
  createCanvas(400, 400);
  createSprite(100, 200, 50, 50);
  ballStuff = {
    x:50, 
    y:350,
    dx:5, 
    dy:5,
    size:50,
  };
  lineCh = {
    x2: ballStuff.x + ballStuff.size/2,
    y2: ballStuff.y + ballStuff.size/2,

  };
  xCor = ballStuff.x;
  yCor = ballStuff.y;
}

function preload() 
  ballImage = loadImage( , [successCallback], [failureCallback])

function draw() {
  background(220);
  base();
  move();
  ball();
  drawSprites();
}

function ball() {
  fill("red");
  ellipse(ballStuff.x, ballStuff.y, ballStuff.size, ballStuff.size);
  line(ballStuff.x, ballStuff.y, lineCh.x2, lineCh.y2);
}

function move() {
  if (keyIsPressed && (key === "d")) {
    ballStuff.x += ballStuff.dx;
  }
  if (keyIsPressed && (key === "a")) {
    ballStuff.x -= ballStuff.dx;
  }
  if (keyIsPressed && (key === "w")) {
    ballStuff.y -= ballStuff.dy;
  }
  if (keyIsPressed && (key === "d" && key === "w")) {
    ballStuff.x += ballStuff.dx;
    ballStuff.y -= ballStuff.dy;
  }
}

function base() {
  fill("black");
  rect(0, 350, 400, 50);


}