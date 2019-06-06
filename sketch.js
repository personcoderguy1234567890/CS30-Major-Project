// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let ball, scalar;
let ballImage;
let groundLocation = 425;
let ground;



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
    this.y = 425;
    this.gravity = 0.9;
    this.dy = 0;
    this.dx = 0;
    this.ay = 0;
    this.ax = 0;
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

    if (!keyIsPressed) {
      this.dx *= 0.9;
    }
    if (!keyIsPressed) {
      this.dy *= 0.9;
    }

    // this.dy = 0;
    this.ay = 0;

    // this.dx = 0;
    this.ax = 0;

  }
}

function surface() {
  fill("black");
  rect(0, 450, 500, 50);
  // if (x + rectWidth >= width || x <= 0) {
  //   dx = -1 * dx;
  // }
  // if (y + rectHeight >= height || y <= 0) {
  //   dy = -1 * dy;
  // }
  if (ball.y + ball.radius >= groundLocation) {
    ball.y <= groundLocation;
  } 
}

function keyPressed() {

  if (key === "d") {
    ball.ax = 5;
  }
  if (key === "a") {
    ball.ax = -5;
  }
  if (key === "w") {
    ball.ay = -5;
    while (ball.dy > groundLocation) {
      ball.ay += ball.gravity;
    }
  }
  if (key === "s") {
    ball.ay = 5;
  }

}


