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

let ball;
let ballImage;


function preload() {
  ballImage = loadAnimation('assets/smileyface.png', 'assets/stressedface.png');


}

function setup() {
  createCanvas(500, 500);
  ball = {
    x:50, 
    y:350,
    dx:5, 
    dy:5,
    Scalar: 0.1,
    width = ballImage.width * ball.Scalar,
    height = ballImage.height * ball.Scalar,
  };
}

function draw() {
  background(255, 255, 255);
  move();
  animation(ballImage, ball.x, ball.y, ball.width, ball.height);

}

function move() {
  if (keyIsPressed && (key === "d")) {
    ball.x +=ball.dx;
  }
  if (keyIsPressed && (key === "a")) {
    ball.x -=ball.dx;
  }
  if (keyIsPressed && (key === "w")) {
    ball.y -=ball.dy;
  }
  if (keyIsPressed && (key === "d" && key === "w")) {
    ball.x +=ball.dx;
    ball.y -=ball.dy;
  }
}
