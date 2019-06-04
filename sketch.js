// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let ball, scalar;
let ballImage;
let groundLocation, ground;



function preload() {
  ballImage = loadImage("assets/face.png");
}


function setup() {
  createCanvas(500, 500);
  ball = new Theball();
}

function draw() {
  background("grey");
  surface();
  ball.display();
  ball.update();
  
  // move();
}

class Theball {
  constructor() {
    this.radius = 25;
    this.x = 50;
    this.y = height - 100;
    this.gravity = 0.1;
    this.dy = 0;
    this.dx = 0;
    this.ay = 0;
    this.ax = 0;
    this.groundPoint = 450;
  }

  display() {
    fill("red");
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
    // image(this.ballImage, this.x, this.y, this.radius, this.radius);
  }
  
  update() {
    this.dy += this.ay;
    this.y += this.dy;

    this.dx += this.ax;
    this.x += this.dx;

    // this.dy = 0;
    this.ay = 0;

    // this.dx = 0;
    this.ax = 0;

  }
}

function surface() {
  rect(0, 450, 500, 50);
  
}


function keyPressed() {
  groundLocation = 400;
  if (keyIsPressed && (key === "d")) {
    ball.ax = 0.5;
  }
  if (keyIsPressed && (key === "a")) {
    ball.ax = -0.5;
  }
  if (keyIsPressed && (key === "w")) {
    ball.ay = -5;
    while (ball.dy > groundLocation) {
      ball.ay += ball.gravity;
    }
  }

}


