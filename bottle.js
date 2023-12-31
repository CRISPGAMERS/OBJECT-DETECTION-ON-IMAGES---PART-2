status=""
OBJECTS=[];
Img=""


function preload(){
Img=loadImage("https://www.bigbasket.com/media/uploads/p/l/40080581_2-cello-h2o-unbreakable-water-bottle-blue.jpg");
}

function setup(){
 canvas=createCanvas(500,400);
 canvas.position(500,250)
 OD=ml5.objectDetector('cocossd', model_loaded);
 document.getElementById("status").innerHTML="status detecting objects";
}



function model_loaded(){
 console.log("Model has loaded");
 status1=true;
 OD.detect(Img, got_results);
  
}

function got_results(error, results){
 if(error){
 console.error(error);
 }   
 else{
     console.log(results);
     OBJECTS=results;
    }
}

function draw(){
    image(Img, 0, 0, 500, 500);
       
   if(status !=""){
    for(i=0;i<OBJECTS.length;i++){
    document.getElementById("statuss").innerHTML="Status:Object detected";
    percentage=floor(OBJECTS[i].confidence*100);
    fill("red");
    textSize(20);
    text(OBJECTS[i].label+" "+percentage+"%", OBJECTS[i].x, OBJECTS[i].y);
    noFill();
    R=Math.random()*255;
    G=Math.random()*255;
    B=Math.random()*255   
    stroke(R, G, B);
    rect(OBJECTS[i].x-80, OBJECTS[i].y-80, OBJECTS[i].width, OBJECTS[i].height);
    }
   }
}

function back()
{
    window.location = "index.html"
}