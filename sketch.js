// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let ball, scalar;
let ballImage;
let groundLocation = 450;
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
  // theGravity();
  ball.display();
  ball.update();
  checkSurface();
}

// class Enemies {
//   constructor() {
//     this.x = 100;
//     this.y = 100;
    
//   }
//   display() {
//     fill("green");
//     rect()
//   }
// }


class Theball {
  constructor() {
    this.radius = 25;
    this.x = 50;
    this.y = 425;
    this.gravity = 0.7;
    this.dy = 0;
    this.dx = 0;
    this.ay = 0;
    this.ax = 0;
  }

  applyGravity() {
    if (this.y + this.radius < groundLocation) {
      this.dy += this.gravity;
    }
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

    // this.y <= 425;

    if (!keyIsPressed) {
      this.dx *= 0.9;
    }
    if (!keyIsPressed) {
      this.dy *= 0.9;
    }

    this.applyGravity();

    // this.dy = 0;
    this.ay = 0;

    // this.dx = 0;
    this.ax = 0;

  }
}

function surface() {
  fill("black");
  rect(0, 450, 500, 50);

}

function checkSurface() {
  if (ball.y + ball.radius > groundLocation) {
    ball.y = groundLocation - ball.radius;
    ball.dy = 0;
  } 
}


function enemies() {
  fill("green");
  rect(100, 100, 50, 50);

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
  }
  if (key === "s") {
    ball.ay = 5;
  }

}



