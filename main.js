noseX=0;
noseY=0;

function preload(){
mustache = loadImage('https://i.postimg.cc/RFCzmJJP/Mustace-1-removebg-preview.png');
hat_png = loadImage('https://i.postimg.cc/FRznGyLQ/Hat-1-removebg-preview.png');
}

function setup(){
    canvas = createCanvas(600,600)
    canvas.position(950,300);
    video = createCapture(VIDEO)
    video.size(600,600);
    video.hide();

    PoseNet= ml5.poseNet(video, modelLoaded);
    PoseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function gotPoses(results){
    if(results.length> 0){
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x ="+ noseX);
        console.log("nose y ="+noseY);
    }
}
function draw(){
image(video, 0, 0, 600, 600);
image(mustache, noseX-45, noseY-20, 100, 100);
image(hat_png, noseX-65, noseY-300, 150, 190);
}

function take_snapshot(){
    save('Vyom_01.png');
}