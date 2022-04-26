function preload(){
  // preload assets

}


function setup() {
  createCanvas(400, 400);

}

function draw() {
background(150, 160, 180);
frameRate(1);


fill(random(70, 220), 80, 120);
strokeWeight(0);

  beginShape();
  vertex(67, 69);
  vertex(133, 133);
  vertex(100, 200);
  vertex(35, 133);
  endShape(CLOSE);

fill(random(0, 255), 100, 180);
strokeWeight(0);
  beginShape();
  vertex(167, 265);
  vertex(235, 333); 
  vertex(200, 400); 
  vertex(133, 333);
  endShape(CLOSE);

fill (150, (random(100, 170)), 180);
strokeWeight(0);

  beginShape();
  vertex(300, 0);
  vertex(368, 68);
  vertex(333, 133);
  vertex(265, 68);
  endShape(CLOSE);


strokeWeight (2);
stroke(255);

line(0, 300, 100, 400);
line(0, 200, 200, 400);
line(0, 100, 300, 400);
  line(0, 0, 400, 400);
line(100, 0, 400, 300);
line(200, 0, 400, 200);
line(300, 0, 400, 100);

line(100, 0, 0, 200);
line(200, 0, 0, 400);
  line(300, 0, 100, 400);
line(400, 0, 200, 400);
line(400, 200, 300, 400);


}
