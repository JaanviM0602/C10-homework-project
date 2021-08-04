var sea,ship,seaImg,shipImg1


function preload(){
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImg = loadImage("sea.png");
}


function setup(){

  createCanvas(400,400);

  sea = createSprite(200,200);
  sea.addImage("seaImg",seaImg);
  sea.velocityX = -12;
  ship = createSprite(70, 300);
  console.log(ship.x," ", ship.y);
  ship.addAnimation("shipImg1",shipImg1);
  ship.scale = 0.2
  
}


function draw() {
  background("lightblue");
  if(sea.x < 0 ) {
    sea.x = sea.width/2;
  }
  drawSprites();

}