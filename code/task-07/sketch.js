const sketchWidth = 400;
const sketchHeight = 400;


function preload(){
  // preload assets
}


function setup() {
createCanvas(420, 600);

}


function draw() {
background(255);
frameRate(5);
noFill();
strokeWeight(3);


for (let y = 1; y < 50; y += 1) {
  beginShape();
for (let x = sketchWidth/40; x < sketchWidth; x += 1) {

vertex(x, -50 + y * random(20, 20.5) + sin(Math.PI * 4 * (x / sketchWidth)) * 40);
    
}
endShape();

}

}