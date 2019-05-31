// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



// function base() {
//   fill("black");
//   rect(0, 350, 400, 50);

// }
// let yLocation, yVelocity, yAcceleration;
// let x, radius;
// let gravity, ground;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   radius = 25;
//   ground = height - radius;
//   x = width/2;
//   gravity = 0.1;
//   yLocation = ground;
//   yVelocity = 0;
//   yAcceleration = 0;
// }


//   // physics
//   yAcceleration = 0;
//   yVelocity += gravity;
//   if (yLocation > ground) {
//     yLocation = ground;
//     yVelocity = 0;
//   }

// function keyPressed() {
//   if (key === " ") {
//     yAcceleration = -5;
//   }
// }

let ball;
let ballImage;
let gravity, ground;

class Theball {
  constructor() {
    this.x = 50;
    this.y = ground - ball.radius;
    this.dx = 5;
    this.dy = 5;
    this.ay = 0;
    this.ax = 0;
    this.scalar = 0.1;
    this.radius = ballImage.width * this.scalar;
  }
}

function setup() {
  createCanvas(500, 500);
  ball = new Theball();
  ground = rect(0, 350, 400, 50);
  gravity = 0.1;
}


function preload() {
  ballImage = loadImage('assets/smileyface.png');
}



function draw() {
  background("grey");
  move();
  image(ballImage, ball.x, ball.y, ball.radius * 2, ball.radius * 2);
}



function move() {
  if (keyIsPressed && (key === "d")) {
    ball.x += ball.dx;
  }
  if (keyIsPressed && (key === "a")) {
    ball.x -= ball.dx;
  }
  if (keyIsPressed && (key === "w")) {
    ball.y -= ball.dy;
  }
  if (keyIsPressed && (key === "d" && key === "w")) {
    ball.x += ball.dx;
    ball.y -= ball.dy;
  }
}








// function rotationScan() {
//   if (keyIsPressed && (key === "d")) {
//     rotate(smileyBall.dx * , 3);
//   }
//   else {
//     translate(smileyBall.x, smileyBall.y);
//   }
// }

// function rotating(ball) {
//   push();
//   rotationScan();
//   pop();
// }
// function move() {
//   if(keyDown(LEFT_ARROW)) {
//     smileyBall.x -= smileyBall.dx;

//   }
//   if(keyDown(RIGHT_ARROW)) { 
//     smileyBall.x += smileyBall.dx;

//   }
// }




