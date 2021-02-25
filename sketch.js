var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
function preload()
{
 
}

function setup() {
  createCanvas(1366,2700);
  carGroup1 = new Group();
  logGroup1 = new Group();
  
  //grasses where the player can rest 
  for(var i=0;i<6;i++){
    var bottomGrass1 = createSprites(683,height-50-(i*400),width,grassHeight);
    if(i%2===0){
     var road = createSprites(683,height-150-(i*400)-grassHeight,width,300);
     road.shapeColor= "black"; 
    }  
    bottomGrass1.shapeColor= "grey";
    }
    // to create rows of car 
    for(var i=0;i<40;i++){
    cars = new Car(2);
    carGroup1.add(cars.spt);  
    }
    // to create rows of logs
    for(var i=0;i<40;i++){
      log = new Car(2);
      logGroup1.add(logs.spt);  
      }
   //amking the log reapper 
   for(i =1;i<logGroup1.lenght;i++){
    if(logGroup1[i].x<0){
    logGroup1[i].x=width;  
    }
    for(i=1;i<carGroup1.lenght;i++){
     if(carGroup1[i].x<0 || carGroup1[i].x>1366){
       carGroup1[i].x = width;
     }  
    }
   }

     
 }

function draw() {
  background("skyblue");
   
 

  drawSprites();
}

