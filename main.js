Webcam.set({
    width: 350,
    height: 300,
image_format:'png',
image_quality:90,
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
     document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>'
    });
}

console.log("ML5 Version", ml5.version);

classifier=imageClassifier('https://teachablemachine.withgoogle.com/models/BMzs-E2sD/model.json', modelLoaded);

function modelLoaded()
{
    console.log("Model Loaded");
}