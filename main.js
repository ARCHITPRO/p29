function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function take_snapshot(){
save('SIUUUUUUUUUUUUUUUU.png');
}

function draw(){
image(video,0,0,300,300);
image(clown_,nosex,nosey,30,30);
}

function modelLoaded(){
console.log('modelLoaded');
}

function gotPoses(results){
if(results.length>0){
console.log(results);
console.log("nosex="+results[0].pose.nose.x);
console.log("nosey="+results[0].pose.nose.y);
nosex=results[0].pose.nose.x;
nosey=results[0].pose.nose.y;
}
}

nosex=0;nosey=0;

function reload(){
clown_nose=loadImage("https://i.postimg.cc/RVv405mq/nose.png");
}