
let table;

const sketchWidth = 2600;
const sketchHeight = 3500;

function preload(){
  // preload assets

  table = loadTable('Liste_Namen.csv', 'csv', 'header');

}

function setup() {
createCanvas(sketchWidth, sketchHeight);


for (let r = 0; r < table.getRowCount(); r++) {
  const name = table.getString(r, "FREUNDE");

  text(name, 50, 50);

  // console.log(name);

  }

}

function draw() {
background (155);

}

