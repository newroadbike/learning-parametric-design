function preload(){
  // preload assets
}

let slider;

function setup() {
createCanvas(400, 400);

sliderA = createSlider(2, 10, 7);
sliderA.position(280, 330);
sliderA.size(80);

colorMode(RGB);
sliderB = createSlider(30, 80, 50);
sliderB.position(240, 360);
sliderB.size(120);

}

let radius1 = 100;
let radius2 = 70;

function draw() {
background(0, 20, sliderB.value());

frameRate(5);

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

frameRate(2)

//großer Kreis
strokeWeight(10);
stroke (random(100, 130), 25, 13);
fill('#35190D');
circle(100, 300, radius1);

//kleiner Kreis
strokeWeight(10);
stroke('rgba(106,56,0,0.5)');
fill('#6A3800')
circle(100, 300, radius2);

// //Sprenkel auf Kreisen
// fill(0);
// strokeWeight(0);
// for(let x = 0; x < 1; x += 0.01) {
// const y = Math.pow(Math.random(), 2);
// circle(random(60, 140), random(260, 340), y * 2);

// }

fill(255);
noStroke();
circle(100, 100, sliderA.value());
circle(250, 300, sliderA.value());
circle(270, 280, 3);
circle(350, 220, sliderA.value());
circle(40, 200, 3);


}

function keyPressed(){
  if (keyCode === 39){
    radius1 += 5; radius2 += 5;
  }else if (keyCode === 37){
    radius1 -= 5; radius2 -= 5;
  }
}



