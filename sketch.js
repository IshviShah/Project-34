//Create variables here
var dog, hapDog;
var database;
var foodS, foodStock;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  hapDogImg = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  
  dog = createSprite(250,300,50,50);
  dog.addImage(dogImg);
  dog.scale = 0.2;
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
    noStroke();
    textSize(20)
    fill("black")
    text("Food Remaining:  " + foodStock, 20, 200)

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



