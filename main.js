function startClassification() {
    navigator.mediaDevices.getUserMedia({ Audio: 2 });
    sound = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Qhv2zdi-_/model.json", modelLoaded);
}
function modelLoaded() {
    console.log("model loaded");
    sound.classify(gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
    }

} 