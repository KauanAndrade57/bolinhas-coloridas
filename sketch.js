let cor;
let circuloX;//X
let circuloY; //Y




function setup() {
  
  createCanvas(400, 400);
  background ("white");
  cor = color (random (0,255),random (0,255),random (0,255));
  circuloX = [0, 0, 0];
  circuloY = [random (height), random (height), random (height)];
  
}

function draw() {
 
 // console.log(circuloX.length);
  for(let contagem in circuloX){
    console.log(contagem)
    circle(circuloX[contagem],circuloY[contagem], 50);
 circuloX[contagem] += random(0,3);
  circuloY[contagem] += random(-3,3);
 
  if (circuloX[contagem] >= width) {
    circuloX[contagem] = 0;
    circuloY[contagem] = random (height);
  }
  
  
  
  
  
  }
  
   fill(cor)
  
 
//   circuloX[1] += random(0,3);
 // circuloY[1] += random(-3,3);
  
  if (mouseIsPressed) {
   cor =  color (random (0,255),random (0,255),random (0,255), random (0,100));
  }
  
  
}