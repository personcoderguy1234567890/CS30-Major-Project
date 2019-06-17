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

let gunx = 100;
let guny = 100;

let gundx = 0.01;

let secondGunx = 400;
let secondguny= 100; 

let myBullets = [];

function setup() {
  createCanvas(500, 500);
  ball = new Theball();
  for (let i=5; i<100; i++) {
    thebullets = new Bullets(150, 150, 10, 10);
    myBullets.push(thebullets);
  }
}

function draw() {
  background("grey");
  surface();

  ball.display();
  ball.update();

  multiplyBullets();
  // thebullets.display();

  // thebullets.shoot();

  
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

  checkBorders() {
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
    // this.timer = new Timer(1000);
  }

  display() {
      fill(this.color);
      ellipse(this.x, this.y, this.radius*2, this.radius*2);
    } 

  shoot() {
    // this.dy += this.ay;
    this.y += this.dy;

    // this.dx += this.ax;
    this.x += this.dx;

    this.dx = 5 * Math.sin(mouseX);
    this.dy = 5 * Math.cos(mouseY);
  }

  checkBorders() {
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

function multiplyBullets() {
  for (let i = 0; i < myBullets.length; i++) {
    myBullets[i].display();
    myBullets[i].checkBorders();
    myBullets[i].shoot();
  } 
}


// function mousePressed() {
//   thebullets.shoot();
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


// These functions make a rectangle for each body part
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



