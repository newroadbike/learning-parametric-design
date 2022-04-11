function preload(){
  // preload assets
}

function setup() {
  createCanvas(400,400);
}

function draw() {
  background('#FFEDBF');

  fill('#FABF80')
  rect(0, 0, 200, 400);

  fill('#010101')
  rect(0, 50, 400, 6)
  rect(0, 75, 400, 10)
  rect(0, 120, 400, 14)
  rect(0, 155, 400, 20)
  rect(0, 190, 400, 30)
  rect(0, 250, 400, 42)
  rect(0, 320, 400, 80)


  fill('#BADDC9');
  strokeWeight(0);
  triangle(0, 400, 0, 0, 400, 400);

  fill('#F1E960')
  circle(60, 70, 90)
  circle(160, 170, 130)
  circle(290, 295, 170)

  fill('rgba(186, 221, 201, 0.6)');
  strokeWeight(0);
  triangle(0, 400, 0, 0, 400, 400);


}
