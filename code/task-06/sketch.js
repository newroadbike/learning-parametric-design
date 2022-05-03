const sketchWidth = 400;
const sketchHeight = 400;


function preload(){
  // preload assets
}


function setup() {
createCanvas(400, 400);

}


function draw() {
background(0, 10, 20);
frameRate(2);

//Schweif
noFill();
stroke(155);
strokeWeight(random(0.1, 1));

for (let x = 0; x < 10; x += 1) {
  for (let y = 0; y < 8; y += 1) {
    push();
    const offsetX = x * 30;
    const offsetY = y * 20;
    translate(offsetX, offsetY);
    beginShape();
    curveVertex(100 - offsetX, 300 - offsetY);
    curveVertex(350 + offsetX, -300 + offsetY);
    endShape(CLOSE);
    pop();

  }

}



//großer Kreis
strokeWeight(10);
stroke (random(100, 130), 25, 13);
fill('#35190D');
circle(random(100, 103), 300, 100);

//kleiner Kreis
strokeWeight(10);
stroke('rgba(106,56,0,0.5)');
fill('#6A3800')
circle(100, 300, 70);

//Sprenkel auf Kreisen
fill(0);
strokeWeight(0);
for(let x = 0; x < 1; x += 0.01) {
const y = Math.pow(Math.random(), 2);
circle(random(60, 140), random(260, 340), y * 2);

}

fill(255);
circle(100, 100, random(6, 10));
circle(250, 300, random(3, 6));
circle(270, 280, random(1, 4));
circle(350, 220, random(3, 6));
circle(40, 200, random(1, 4));



}



