//Create variables here
var dog, dogImg, hapDog, hapDogImg;
var database;
var foodS, foodStock;

function preload()
{
  //load images here
  dogImg = loadImage("dogImg.png");
  hapDogImg = loadImage("dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  
  dog = createSprite(250,250,50,50);
  dog.addImage(dogImg);
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(hapDogImg);
  }
  drawSprites();
  //add styles here

}
function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if(x<= 0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food : x
  })
}



