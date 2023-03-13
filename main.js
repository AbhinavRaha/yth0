img="";
status="";

object=[];



function preload(  )
{
img=loadImage("dog_cat.jpg");
}

function setup()
{
canvas=createCanvas(500,500);

canvas.center();

objectDetector=ml5.objectDetector('cocossd' ,modleloded);

document.getElementById('status').inerHTML="status-detecting objetes";
}
function draw() {
    image(img, 0, 0, 380, 380);
        if(status != "")
        {
         
          objectDetector.detect(img, gotResult);
          for (i = 0; i < object.length; i++) {
            document.getElementById("status").innerHTML = "Status : Object Detected";
            
   
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(object[i].label + " " + percent + "%", object[i].x + 15, object[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
          }
        }
  }
  

function modleloded()
{
console.log("modle is loded");

status=true;


}

function gotResults(error,results)
    {
if(error){
console.log (error);
}
console.log (results);

object=results;
    }
