var fixedrect,movingrect;
var object1, object2,object3;
function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(1000, 200, 30, 90);
  fixedrect.shapeColor=("black");
  fixedrect.debug=true;
  movingrect=createSprite(400,200,30,30);
  movingrect.shapeColor=("white");
  movingrect.debug=true;

  object1=createSprite(1000,300,30,90);
  object1.shapeColor=("black");
  object1.debug=true;
  object1=createSprite(950,300,30,30);
  object1.shapeColor=("yellow");
  object1.debug=true;

  object2=createSprite(1000,400,30,90);
  object2.shapeColor=("black");
  object2.debug=true;
  object2=createSprite(950,400,30,30);
  object2.shapeColor=("red");
  object2.debug=true;

  object3=createSprite(1000,500,30,90);
  object3.shapeColor=("black");
  object3.debug=true;
  object3=createSprite(950,500,30,30);
  object3.shapeColor=("green");
  object3.debug=true;
}





































































































































function draw() {
  background(0,0,0);  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  
if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
  && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
  && movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
  && fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){

    
movingrect.shapeColor="white";
fixedrect.shapeColor="black";
}
else{
movingrect.shapeColor="white";
fixedrect.shapeColor="black";
}

  drawSprites();
}



