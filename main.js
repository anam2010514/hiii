Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});

var camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = "<img id = 'capture_img' src='"+ data_uri +"'/>"; 
    });

}

console.log('ml5 version', ml5.version);

Classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/yYoFhshV9/model.json", modelLoaded);

function modelLoaded(){
    console.log("modelLoaded");
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "the predection is " + Prediction_1;

    var utterthis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterthis);
}
function check() {
    var img = document.getElementById("capture_img");
    Classifier.classify(img, gotResult);
}