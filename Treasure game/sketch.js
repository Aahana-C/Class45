var bg, bgImage;
var ground, Lily;

function setup() {
createCanvas(displayWidth, displayHeight-80);  
ground = createSprite(displayWidth/2,displayHeight-100,displayWidth,60);
ground.shapeColor=rgb(109,74,14);
ground.velocityX = -2
//bg.addImage("background",bgImage);
//bg.scale = 1.0;*/

Lily = createSprite(120,displayHeight-215, 40, 20);
Lily.addImage("background",playerImage);
Lily.scale = 0.7;

obstaclesGroup = new Group();
}

function preload(){
bgImage = loadImage ("games9.jpg");
playerImage = loadImage ("Player1.png");
obstacle1 = loadImage ();
obstacle2 = loadImage ();
obstacle3 = loadImage ();

}

function draw() {
background(bgImage);
console.log(ground.x);
if(ground.x<800){
ground.x = displayWidth/2;
}
drawSprites();  
}


function spawnObstacles(){
    if (frameCount % 60 === 0){
      var obstacle = createSprite(600,165,10,40);
      obstacle.velocityX = -(6 + score/100);
      
       //generate random obstacles
       var rand = Math.round(random(1,3));
       switch(rand) {
         case 1: obstacle.addImage(obstacle1);
                 break;
         case 2: obstacle.addImage(obstacle2);
                 break;
         case 3: obstacle.addImage(obstacle3);
                 break;
        
         default: break;
       }
      
       //assign scale and lifetime to the obstacle           
       obstacle.scale = 0.5;
       obstacle.lifetime = 300;
      
      //add each obstacle to the group
       obstaclesGroup.add(obstacle);
    }
   }
   
  

