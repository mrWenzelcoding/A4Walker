let xSpeed;
let ySpeed;
let x,y;
let shade;
let checker;


function setup() {
  createCanvas(600, 600);
  background(255);
  noStroke();
  xSpeed=random(-5,5);
  ySpeed=random(-5,5)
  x=random(width);
  y=random(height);
  shade=235;
  checker = false;
}

function draw() {
  ellipse(x,y,8)
  
  if(shade<2){
    checker = true 
  }
  if(shade>253){
    checker = false
  }
  if(checker == true){
    shade = lerp(shade,255,0.01)
  }
  if(checker == false){
    shade = lerp(shade,0,0.01)
  }
    


  fill(0,100,shade)
  
  if(x<0){
    xSpeed = random(1,5)
  }
  if(x>width){
    xSpeed = random(-5,-1)
  }
  if(y<0){
    ySpeed = random(1,5)
  }
  if(y>height){
    ySpeed = random(-5,-1)
  }
  
  
  x=x+xSpeed
  y=y+ySpeed
  xSpeed=random(-5,5);
  ySpeed=random(-5,5);
  
  if(frameCount % 600 == 0){
    x = random(width)
    y = random(height)
  }
}