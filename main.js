Webcam.set({
    height:300,
    width:350,
    image_format:'png',
    png_quality:90,
})
camera= document.getElementById("camera");
Webcam.attach('#camera');
function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="capturedImage">'
    })

}
console.log("ml5 version : ",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/gydcg5ATOo/model.json',modelLoaded);
function modelLoaded(){
    console.log('modelLoaded');
}