var dog;
var happyDog; 
var database; 
var foodS; 
var foodStock

function preload(){
  dog = loadImage("images/dogImg.png");
  dogImage = loadImage("images/dogImg1.png")
}

function setup() {
  
  database=firebase.database();

  foodStock=database.ref('food');

  foodStock.on("value",readStock);

  createCanvas(500,500);

  dog1 = createSprite(250,250,20,20);
  dog1.addImage(dog);
  dog1.scale = 0.15;

}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog1.addImage(dogImage);
  }

  dog1.display();

drawSprites();

push();
fill("black")
noStroke();
textSize(20);
text("Number of milk cans left: "+ foodS,120,75 )
text("Press the Up Arrow to feed the Dog", 95,425);
pop();
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}


