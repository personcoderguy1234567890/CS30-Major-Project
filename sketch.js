// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// class Bullets() {
//   constructor() {
//     this.radius = 5;
//     this.x = 50;
//     this.y = 425;
//     this.gravity = 0.7;
//     this.dy = 0;
//     this.dx = 0;
//     this.ay = 0;
//     this.ax = 0;
//   }

//   display() {
//     fill("blue")
//     ellipse(this.x, this.y, this.radius*2, this.radius*2);
//   }

// }


let ball, enemy1, scalar;
let ballImage;
let groundLocation = 450;
let ground;


function setup() {
  createCanvas(500, 500);
  ball = new Theball();
  // (x1, y1, x2, y2, x3, y3, color, translatex, translatey) {
  enemy1 = new Enemy(350,100, 400,100, 375,200, "green", 375, 150);
}

function draw() {
  background("grey");
  surface();

  push();
  enemy1.display();
  enemy1.scanner();
  pop();
  // enemy1.display();
  ball.display();
  ball.update();
  
  checkSurface();
  
}

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

    this.applyGravity();

    this.ay = 0;

    this.ax = 0;

  }
}

class Enemy {
  constructor(x1, y1, x2, y2, x3, y3, color, translatex, translatey) {
    this.x1 = x1;
    this.y1 = y1;
    
    this.x2 = x2;
    this.y2 = y2;

    this.color = color;

    this.x3 = x3;
    this.y3 = y3;

    this.dx = 0.9;

    this.translatex = translatex;
    this.translatey = translatey;
  }
  
  display() {
    fill(this.color);
    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
  }
  
  scanner() {
    translate(this.translatex, this.translatey);
    rotate(this.dx * mouseX, 3);
  }


}

// class Bullet {
//   this.x = enemy1.x;
//   this.y = ene

// } 


// function mousePressed() {
//   Enemies.shoot();
// }

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


// function enemies() {
//   fill("green");
//   // triangle(this.x1, y1, x2, y2, x3, y3)
//   translate(125, 120);
  
//   rotate(0.9 * mouseX, 3);
//   enemy1;
//   // triangle(350,100, 400,100, 375,200);
//   enemy1()

// }

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



