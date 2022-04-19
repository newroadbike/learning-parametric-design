function preload(){
  // preload assets
}

let rectangleSize1 = 10;
let rectangleSize2 = 30;
let rectangleSize3 = 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  
  for (let x = 1; x <= 18; x += 1) {
  for (let y = 1; y <= 18; y += 1) {
  for (let z = 1; z <= 6; z += 1) { 
  for (let a = 1; a <= 8; a += 1){

    fill(0, (random(0, 200)), 255);
    strokeWeight (0);
    rect(20 * x, 20 * y, rectangleSize1);

    fill(0, 0, (random(70, 190)));
    strokeWeight (0);

    rect(50 * z, 50 * z, rectangleSize3);
    rect(40 * a, 40 * a, rectangleSize2);
    
  }

}
} 
}

}
