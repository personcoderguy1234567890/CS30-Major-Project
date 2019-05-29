// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// let ballStuff;
// let lineCh;
// let xCor;
// let yCor;
// let ballImage;

// function setup() {
//   createCanvas(400, 400);
//   createSprite(100, 200, 50, 50);
//   ballStuff = {
//     x:50, 
//     y:350,
//     dx:5, 
//     dy:5,
//     size:50,
//   };
// }

// // function preload() 
// //   ballImage = loadImage("assets/smileyface.jpg");

// function draw() {
//   background(220);
//   base();
//   move();
//   // drawSprites();
// }

// function ball() {
//   fill("red");
//   ellipse(ballStuff.x, ballStuff.y, ballStuff.size, ballStuff.size);
// }

// function move() {
//   if (keyIsPressed && (key === "d")) {
//     ballStuff.x += ballStuff.dx;
//   }
//   if (keyIsPressed && (key === "a")) {
//     ballStuff.x -= ballStuff.dx;
//   }
//   if (keyIsPressed && (key === "w")) {
//     ballStuff.y -= ballStuff.dy;
//   }
//   if (keyIsPressed && (key === "d" && key === "w")) {
//     ballStuff.x += ballStuff.dx;
//     ballStuff.y -= ballStuff.dy;
//   }
// }

// function base() {
//   fill("black");
//   rect(0, 350, 400, 50);


// }

let smileyBall;
let ballImage;



function preload() {
  ballImage = loadImage('assets/smileyface.png');
}

function setup() {
  createCanvas(500, 500);
  smileyBall = new Ball();
}

function draw() {
  background("grey");
  // rotationScan();
  // rotating(smileyBall);
  move();
  image(ballImage, smileyBall.x, smileyBall.y, smileyBall.theWidth, smileyBall.theHeight);
}

class Ball {
  constructor() {
    this.x = 50;
    this.y = 350;
    this.dx = 5;
    this.dy = 5;
    this.scalar = 0.1;
    this.theWidth = ballImage.width * this.scalar;
    this.theHeight = ballImage.height * this.scalar;
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
function move() {
  if(keyDown(LEFT_ARROW)) {
    smileyBall.x -= smileyBall.dx;
    smileyBall.rotation -= 4;
  }
  if(keyDown(RIGHT_ARROW)) { 
    smileyBall.x += smileyBall.dx;
    smileyBall.rotation += 4;
  }
}
// function move() {
//   if (keyIsPressed && (key === "d")) {
//     smileyBall.x += smileyBall.dx;
//     smileyBall.rotation += 3;
//   }
//   if (keyIsPressed && (key === "a")) {
//     smileyBall.x -= smileyBall.dx;
//   }
//   if (keyIsPressed && (key === "w")) {
//     smileyBall.y -= smileyBall.dy;
//   }
//   if (keyIsPressed && (key === "d" && key === "w")) {
//     smileyBall.x += smileyBall.dx;
//     smileyBall.y -= smileyBall.dy;
//   }
// }
