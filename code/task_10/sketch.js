
let table;

const sketchWidth = 800;
const sketchHeight = 600;


function preload(){
// preload assets

table = loadTable('Liste_Namen.csv', 'csv', 'header');

}

function setup() {
createCanvas(sketchWidth, sketchHeight);
frameRate(1);


sel1 = createSelect();
sel1.position(30, 500);
sel1.option('roboto');
sel1.option('acuta');
sel1.option('lust');
sel1.option('jonesy');

sel2 = createSelect();
sel2.position(180, 500);
sel2.option('roboto');
sel2.option('acuta');
sel2.option('lust');
sel2.option('jonesy');

sel3 = createSelect();
sel3.position(330, 500);
sel3.option('roboto');
sel3.option('acuta');
sel3.option('lust');
sel3.option('jonesy');

}


function draw() {
background (255);


for (let r = 0; r < table.getRowCount(); r += 1) {

//FREUNDE
  if (sel1.value() === 'roboto') { textFont('Roboto'); textSize(9); } 
  else if (sel1.value() === 'acuta') { textFont('Acuta'); textSize(9); }
  else if (sel1.value() === 'lust') { textFont('lust'); textSize(8); }
  else if (sel1.value() === 'jonesy') { textFont('Jonesy'); textSize(10); }

  const freunde = table.getString(r, "FREUNDE");
  const frx = 50;
  const fry = r * 30 + 50;
  text(freunde, frx, fry);

// FAMILIE
  if (sel2.value() === 'roboto') { textFont('Roboto'); textSize(9); } 
  else if (sel2.value() === 'acuta') { textFont('Acuta'); textSize(9); }
  else if (sel2.value() === 'lust') { textFont('lust'); textSize(8); } 
  else if (sel2.value() === 'jonesy') { textFont('Jonesy'); textSize(10); }

  const familie = table.getString(r, "FAMILIE");
  const fax = 200;
  const fay = r * 30 + 50;
  text(familie, fax, fay);

//NEUE LEUTE
if (sel3.value() === 'roboto') { textFont('Roboto'); textSize(9); } 
else if (sel3.value() === 'acuta') { textFont('Acuta'); textSize(9); }
else if (sel3.value() === 'lust') { textFont('lust'); textSize(8); }
else if (sel3.value() === 'jonesy') { textFont('Jonesy'); textSize(10); } 

  const neueLeute = table.getString(r, "NEUELEUTE");
  const nlx = 350;
  const nly = r * 30 + 50;
  text(neueLeute, nlx, nly);

  }

// save();
// noLoop();

}

