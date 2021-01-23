var garden,gardenImage,catSound,jerryImage3,tomImage3;
var tom,tomImage,jerry,jerryImage,tomImage2,jerryImage2;
var helpSound,mouseSound;
function preload(){
gardenImage=loadImage("garden.png");
tomImage=loadImage("tomOne.png");
jerryImage=loadImage("jerryOne.png");
tomImage2=loadAnimation("tomTwo.png","tomThree.png");
jerryImage2=loadAnimation("jerryTwo.png","jerryThree.png");
catSound=loadSound("catSound.wav");
tomImage3=loadImage("tomFour.png");
jerryImage3=loadImage("jerryFour.png");
mouseSound=loadSound("mouseSound.mp3");
}
function setup(){
createCanvas(800,620);
garden=createSprite(370,315,20,50);
garden.addImage(gardenImage);
garden.scale=0.9;
tom=createSprite(700,530,20,30);
tom.addImage(tomImage);
tom.addAnimation("tomRunning",tomImage2);
//tom.addAnimation("tomRunning",tomImage3);
tom.scale=0.1;
jerry=createSprite(150,520,20,30);
jerry.addImage(jerryImage);
jerry.addAnimation("jerryhandy",jerryImage2);
//jerry.addAnimation("jerryhandy",jerryImage3);
jerry.scale=0.1;
tom.setCollider("rectangle",0,0,60,10);
tom.debug=false;
       
}
function draw(){
    background(220,0,0);
    if(tom.isTouching(jerry)){
        tom.addImage("tomRunning",tomImage3);
        jerry.addImage("jerryhandy",jerryImage3);
        tom.velocityX=0;
        tom.lifetime=100;
        jerry.lifetime=100;
        
}

    keyPressed();
    drawSprites();
}
function keyPressed(){
    if(keyDown("left")){
        tom.velocityX=-5;
        tom.addAnimation("tomRunning",tomImage2);
        tom.changeAnimation("tomRunning");
        jerry.addAnimation("jerryhandy",jerryImage2);
        jerry.changeAnimation("jerryhandy");
        catSound.play();
        mouseSound.play();
       


    }
}