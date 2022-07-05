
let rbig = 23;
let rmedium = 16;
let rsmall = 12;
let rmini = 9;


function preload(){
  // preload assets
}
const sketchWidth = 890;
const sketchHeight = 720;

const abstandx = rbig * 2.6;
const abstandy = rsmall * 1.9;


function setup() {
createCanvas(sketchWidth, sketchHeight);
}


function draw() {
background (255);
// strokeWeight (2);

// unterschiedliche Anzahl Tage je Monat
const monthDays = [31,29,31,30,31,30,31,31,30,31,30,31];
let spaceI = 0
let spaceII = 0
let spaceIII = 0


for(let x = 1; x < 13; x += 1){
  if (x === 4 || x === 7 || x === 10) {
    spaceI = 30

    if (x === 7) {
      spaceII = 60
    }

    if (x === 10) {
      spaceIII = 30
    }
  }


for(let y = 1; y <= monthDays[x-1]; y += 1){

// normale Einer ausgefüllen
if (y%5 !== 0){
  fill(255);
  }

// unterschiedliche Farben je drei Monate
 if (x <= 3){
  stroke(0, 59, 95);
 } 

 if (x >= 4){
  stroke (27, 127, 88);
 }

 if (x >= 7){
  stroke(222, 179, 35);
 }

 if (x >= 10){
  stroke(103, 81, 136);
 }


// Fünfer ausfüllen
if (y === 5 && x <= 3 || y === 15 && x <= 3 || y === 25 && x <= 3){
  fill(0, 59, 95);
}

if (y === 5 && x >= 4 || y === 15 && x >= 4 || y === 25 && x >= 4){
  fill(27, 127, 88);
}

if (y === 5 && x >= 7 || y === 15 && x >= 7 || y === 25 && x >= 7){
  fill(222, 179, 35);
}

if (y === 5 && x >= 10 || y === 15 && x >= 10 || y === 25 && x >= 10){
  fill(103, 81, 136);
}


// // Fünfer dickerer Stroke
// if (y === 5 || y === 15 || y === 25){
//   strokeWeight (2.8);
//     } else { strokeWeight (1.8);     
//   }
 
strokeWeight (2);

// alle anderen Einer
  circle(abstandx * x + spaceI + spaceII + spaceIII, abstandy * y, rsmall);
    fill(255);

// Zehner + einen Ring
  if (y === 10 || y === 20 || y === 30){
    circle(abstandx * x + spaceI + spaceII + spaceIII, abstandy * y, rbig);
    }

  if (y === 20 || y === 30){
    circle(abstandx * x + spaceI + spaceII + spaceIII, abstandy * y, rmedium);
    }

  if (y === 30){
    circle(abstandx * x + spaceI + spaceII + spaceIII, abstandy * y, rmini);
    } 

// Schaltjahr 29. Februar
  if (x === 2 && y === 29){
    drawingContext.setLineDash([1.5,3]);
    circle(abstandx * x + spaceI + spaceII + spaceIII, abstandy * y, rsmall);
    drawingContext.setLineDash([]);
   }

  }
  }

  // save ();
  noLoop();


}