function preload(){
iss1=loadImage("images/iss.png")
space=loadImage("images/spacebg.jpg")
scraft1=loadImage("images/spacecraft1.png")
scraft2=loadImage("images/spacecraft2.png")
scraft3=loadImage("images/spacecraft3.png")
scraft4=loadImage("images/spacecraft4.png")

}


function setup() {
  createCanvas(600,400);
 spacecraft= createSprite(285, 245);
 
 spacecraft.scale=0.2
 iss=createSprite(330,130)
 iss.addImage("is",iss1)
 iss.scale=0.7
 
}

function draw() {
  background(space);  
  spacecraft.addImage("sc1",scraft1)
  



  if(keyDown("UP_ARROW")){
    spacecraft.addImage("sc1",scraft1)
spacecraft.y=spacecraft.y-2

  }
  if(keyDown("LEFT_ARROW")){
    spacecraft.addImage("sc3",scraft3)
    spacecraft.x=spacecraft.x-2
  }
  if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage("sc2",scraft2)
    spacecraft.x=spacecraft.x+2
  }
  if(keyDown("DOWN_ARROW")){
    spacecraft.addImage("sc1",scraft1)
  }
  if(spacecraft.y<=(iss.y+70)&&spacecraft.x<=(iss.x-10)){
textSize(25)
fill("white")
text("DOCKING SUCCESSFULL",200,300)

  }
  drawSprites();
}