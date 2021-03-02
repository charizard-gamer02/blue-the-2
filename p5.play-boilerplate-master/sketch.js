//Creating variables:
var blue
var score1=0
var spikei
var zomB
var ground,g1
var gameState ="lvl0"
var blueleft,blueright,bluejump
var explotionimg
var cactiimg
var addHealthimg
var losehealthimg
var zomBimgwalk
var startimg
var  gameoverimg
var cacgroup
var life=3
function preload()
{
g1=loadImage("lvl1ground.png")
blueleft=loadAnimation("wl.png","wl2.png")
bluelefti=loadImage("wl2.png")
blueright=loadAnimation("wr.png","wr2.png","wr1.png")
bluejump=loadAnimation("jump.png")
spikei=loadImage("cacti.png")
addHealthimg = loadImage("ah.png")
losehealthimg = loadImage("lh.png")
gunimg=loadImage("gun.png")
goimg=loadImage("go.png")
explosionimg=loadImage("elplotion.png")
fearmeimg=loadImage("fearme.png")
spikei1=loadImage("cactus_01.png")
spikei2=loadImage("cactus_02.png")
lifi=loadImage("ah.png")



}
  function setup() {
  createCanvas(1500,700);
  //Creating Sprites:
   blue = createSprite(30, 625, 40, 40);
   blue.addAnimation("lol",blueright)
   //blue.addAnimation("lol",bluejump)



  // blue.addAnimation("LOL",blueright)
  // blue.addAnimation("LOL1",blueleft)
   
   
   
  zomB = createSprite(700,690,50,50)
  ground = createSprite(750,690,1500,20)
  ground.addImage("lol",g1)
  ground.x=ground.width/2
  ground.velocityX=-3
  cacgroup=createGroup()
}

function draw() {
  background(0);
 //Giving infinite ground
  if(ground.x<600){
  ground.x=ground.width/2
  }
  //GameStates/level zero
  if(gameState==="lvl0"){
    textSize(20)
    text("Arrow keys to control the blue and press S to start!",350,100)
    if(keyDown("s")){
      gameState="lvl1start"
    }
   for(var live=0;live<=2;live++){
image(lifi,1000+50*live,50,50,50)
   }
  
  }
  //Level one start
  if(gameState==="lvl1start"){
text("Score:"+score1,100,50)
    score1 = score1 + Math.round(getFrameRate()/60);
    //score1=Math.round(score1/1)
if (score1>=100){
  text("level 1 cleared, space to go to level 2",600,400)
  ground.velocityX=0
  cacgroup.setvelocityXEach(0)
  blue.velocityX=0
  blue.velocityY=0

  
  if( keyDown("space")){
    gameState="lvl2start"
  }
}
  
  }
  
  //Code for the blue to move
 if( blue.collide(ground)){
  if(keyIsDown(UP_ARROW)){
    blue.changeAnimation("lol",bluejump)
blue.velocityY=-10
  }
}

blue.velocityY = blue.velocityY + 0.3
  if(keyIsDown(LEFT_ARROW)){
    blue.x=blue.x-3
      }
   if(keyIsDown(RIGHT_ARROW)){
        blue.x=blue.x+3
        blue.changeAnimation("lol",blueright)
          }
 
          blue.collide(ground)
          CACTI()
  drawSprites();
}

function CACTI(){
  if(frameCount%400===0){
    cacti =createSprite(1400,605,30,30)
    cacti.scale=0.3
    cacti.velocityX=-3
    cacti.lifetime=1400
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1:cacti.addImage(spikei);
      cacti.scale=0.5
              break;
      case 2: cacti.addImage(spikei1);
              break;
      case 3: cacti.addImage(spikei2);
              break;
     
      default: break;
    }
    cacgroup.add(cacti)

  }
}