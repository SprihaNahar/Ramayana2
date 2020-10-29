var backgroundImg,backgroundImg2;
var ram,ramImg;
var button1,button2;
var m2,mo1Img;
var fire1;
var fire1Img;
var m1,m1Img;
var fire,fireImg;




function preload()
{
backgroundImg=loadImage("images/dhanush/paths.jpg");
ramImg=loadImage("images/dhanush/rama.png");
backgroundImg2=loadImage("images/dhanush/forest1.jpg");
}

function setup()
{
    createCanvas(displayWidth-30,displayHeight-100);
    ram=createSprite(displayWidth/2,displayHeight/2,20,20);


    ram.addImage(ramImg)
    backgroundImg2.scale=8;
    ram.scale=0.3;
   
 button1=createButton('left');
 button1.position((displayWidth/4)+30,(displayHeight/2)-40,150,150);
 button2=createButton('right');
button2.position((displayWidth/2)+200,(displayHeight-180/2)-40,150,150);
}

function draw()
{
    background(backgroundImg2);
    if(keyDown("space"))
    {
         background(backgroundImg2);
        //image(backgroundImg2,displayWidth,displayHeight,800,800);
       
        m1Img=loadImage("images/dhanush/m1.png");
        m1=createSprite(displayWidth-3000/3,displayHeight-180,50,50);
        m1.addImage(m1Img);
        m1.scale=0.8;
        var fire;
        var fireImg;
        fireImg=loadImage("images/dhanush/fire.png");
  fire=createSprite(displayWidth-2600/3,displayHeight-190,50,50);
fire.addImage(fireImg);
fire.scale=0.5


mo1Img=loadImage("images/dhanush/m2.png");
m2=createSprite(displayWidth-1000/3,displayHeight-250,50,50);
m2.addImage(mo1Img);
m2.scale=0.8;

fire1Img=loadImage("images/dhanush/fire1.png");
fire1=createSprite(displayWidth-1400/3,displayHeight-270,50,50);
fire1.addImage(fire1Img);
fire1.scale=0.5





   }
   if(keyDown("UP_ARROW"))
{
     ram.x=ram.x+2;
     ram.y=ram.y+2;
}
    //button1.mousePressed(()=>{

 


    drawSprites();
}


