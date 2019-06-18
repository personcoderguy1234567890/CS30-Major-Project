// Get that Ball
// Raamish Humayun
// 6/17/19


let ball, enemy1, scalar;
let ballImage;
let groundLocation = 450;
let ground;

let gunx = 100;
let guny = 100;

let gundx = 0.01;

let secondGunx = 400;
let secondguny= 100; 

let thebullets;

let hit, counter;

// Creates the canvas and makes a new bullet and ball from the classes
function setup() {
  createCanvas(500, 500);
  ball = new Theball();
  thebullets = new Bullets(gunx, guny, 10, 10);
  }

  // calls the functions
function draw() {
  background("grey");
  surface();

  ball.display();
  ball.update();

  thebullets.display();
  thebullets.checkBorders();
  thebullets.shoot();

  hitting();

  ball.checkBorders();
  checkSurface();
  
  push();
  rightGunScanner();
  rightGun();
  pop();
  push();
  leftGunScanner();
  leftGun();
  pop();
  
}

class Theball {
  constructor() {
    this.radius = 25;
    this.x = 50;
    this.y = 425;
    this.gravity = 0.4;
    this.dy = 0;
    this.dx = 0;
    this.ay = 0;
    this.ax = 0;
  }

// adds a gravity component to the dy
  applyGravity() {
    if (this.y + this.radius < groundLocation) {
      this.dy += this.gravity;
    }
  }

  display() {
    fill("red");
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  }
  
  update() {
    // makes the location dependant on the velocity and the velocity
    // dependant on the acceleration
    this.dy += this.ay;
    this.y += this.dy;

    this.dx += this.ax;
    this.x += this.dx;

    // tells the ball to stop moving in the diection of the key
    // once the user lets go of the key 
    if (!keyIsPressed) {
      this.dx *= 0.9;
    }
    if (!keyIsPressed) {
      this.dy *= 0.9;
    }

    this.applyGravity();

    this.ay = 0;

    this.ax = 0;

  }

  checkBorders() {
    // checks to see if the balls location is near the edge 
    // screen if so it tells the ball to stay in that position until 
    // the user continues with another command 
    if (this.x + this.radius > width) {
      this.x = width - this.radius;
      this.dx = 0;
    }
    if (this.x + this.radius < 0) {
      this.x = 0 + this.radius;
      this.dx = 0;
    }
  }
}


class Bullets {
  constructor(x, y, dx, dy) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = 5;
    this.color = "purple";

  }

  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.radius*2, this.radius*2);
  } 

  shoot() {
    // makes the location dependant on the velocity 
    this.y += this.dy;
    this.x += this.dx;

    // makes a fidgity motion dependant on the mouses
    // x-coordinate and the mouses y-coordinate
    this.dx = 5 * Math.sin(mouseX);
    this.dy = 5 * Math.cos(mouseY);
  }

  checkBorders() {
    // checks to see if the balls location is near the edge 
    // screen if so it tells the ball to stay in that position until 
    // the user continues with another command
    // also checks the top of the canvas 
    if (this.x + this.radius > width) {
      this.x = width - this.radius;
      this.dx = 0;
    }
    if (this.x + this.radius < 0) {
      this.x = 0 + this.radius;
      this.dx = 0;
    }
    if (this.y + this.radius < 0) {
      this.y = 0 + this.radius;
      this.dy = 0;
    }
    if (this.y + this.radius > groundLocation) {
      this.y = groundLocation - this.radius;
      this.dy = 0;
    } 
    } 

}

// creates an empty list
let counterArray = [];
let bulletArray = [];

function hitting() {
  hit = false;
  counter = 0;
  
  // checks to see if collision happens
  hit = collideCircleCircle(ball.x, ball.y, ball.radius * 2, thebullets.x, thebullets.y, thebullets.radius * 2);

  // if a collision happens then the bullet disappears
  if (hit === true) {
    thebullets.radius = thebullets.radius/2;
    counter = counter + 1;
    bulletArray.push(thebullets);
    counterArray.push(counter);
    counterArray.pop()

  }
  text("Player 1 Score:" + counterArray , 20, 20);

}

// makes the surface
function surface() {
  fill("black");
  rect(0, 450, 500, 50);

}
  
  // makes sure the ball can't go through the ground
function checkSurface() {
  if (ball.y + ball.radius > groundLocation) {
    ball.y = groundLocation - ball.radius;
    ball.dy = 0;
  } 
}

// these functions tells the guns where to be located
// and to rotate following the mouse
function rightGunScanner() {
  if (keyIsPressed && (key === "j")) {
    translate(gunx, guny);
    rotate(gundx * mouseX , 3);
  }
  else {
    translate(gunx, guny);
  }
}

function leftGunScanner() {
	if (keyIsPressed && (key === "k")) {
  	translate(secondGunx, secondguny);
  	rotate(gundx * mouseX , 3);
	}
  else {
    translate(secondGunx, secondguny);
  }
}


// These functions make a rectangle for each gun
// and centers it so it rotates about the center
function rightGun() {
	rectMode(CENTER);
  fill("green");
  rect(0, 0 , 20, 50)
}

function leftGun() {
  rectMode(CENTER);
  fill("green");
  rect(0, 0, 20, 50);
}

// adds acceleration for when a key is pressed so the ball moves
function keyPressed() {

  if (key === "d") {
    ball.ax = 7;
  }
  if (key === "a") {
    ball.ax = -7;
  }
  if (key === "w") {
    ball.ay = -7;
  }

}



