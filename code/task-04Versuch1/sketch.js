function preload(){
  // preload assets

}

const sketchWidth = 400;
const sketchHeight = 400;


function setup() {
  createCanvas(400, 400);

}

function draw() {
background(155);
frameRate(1);

for (let x = 1; x < 10; x += 1) {
for (let y = 1; y < 10; y += 1) {

noStroke();
fill(random(70, 220), 80, 120);


beginShape ();
vertex(20, 0);
vertex(40, 40);
vertex(20, 80);
vertex(0, 40);
endShape(CLOSE);

noStroke();
fill(random(0, 255), 100, 160);

beginShape ();
vertex(0, -40);
vertex(20, 0);
vertex(0, 40);
vertex(-20, 0);
endShape(CLOSE);

// beginShape ();
// vertex(0, 40);
// vertex(20, 80);
// vertex(0, 120);
// vertex(-20, 80);
// endShape(CLOSE);


}

}

}
