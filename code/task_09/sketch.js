
let rbig = 110;
let rmedium = 85;
let rsmall = 60;



function preload(){
  // preload assets
}
const sketchWidth = 2600;
const sketchHeight = 3500;
const padding = 100
// const abstand = rbig + 2 * padding;
const abstandx = rbig * 3.7;
const abstandy = rsmall * 1.8;


const columns = Math.floor(sketchWidth / abstandx);
const rows = Math.floor(sketchHeight / abstandx);

function setup() {
createCanvas(sketchWidth, sketchHeight);

}

function draw() {
background (155);
strokeWeight (5);

// rect (350, 60, 2100, 3400);


for(let x = 1; x < 7; x += 1){
    for(let y = 1; y < 32; y += 1){


    //Fünfer dickerer Stroke
    if (y === 5 || y === 15 || y === 25){
      strokeWeight (12);
    } else { strokeWeight (6);    
    }

    
    // alle anderen Einer
    circle(abstandx * x, abstandy * y, rsmall);
 

    //Zehner + einen Ring
    if (y === 10 || y === 20 || y === 30){
      circle(abstandx * x, abstandy * y, rbig);
    }
    if (y === 20 || y === 30){
      circle(abstandx * x, abstandy * y, rmedium);
    }
    if (y === 30){
      circle(abstandx * x, abstandy * y, rsmall);
    } 
    // if (x === 1 && y === 31){
    //   //   fill(255);
    //   //   strokeWeight(6);
    //   //   stroke(255);
    //     circle(abstandx * x, abstandy * y, rmedium);


  }
  }
  // if (x === 1 && y === 31){
  //   fill(255);
  //   strokeWeight(6);
  //   stroke(255);
  //   circle(abstandx * x, abstandy * y, rmedium);

}

// }
