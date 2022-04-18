function bob() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/5r96p5_IN/model.json", modelReady);
}
function modelReady() {
    classifier.classify(gotResult);
}
Dog = 0;
Cat = 0;
Lion= 0;
Cow = 0;
function gotResult(error, results) {
    if (error) {
        console.error(error);
    console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        
        document.getElementById("sounds").innerHTML = " I can hear - " + results[0].label
        document.getElementById("acc").innerHTML = " Accuracy - " + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("sounds").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("acc").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")"; 
        
        img1 = document.getElementById("a1");
        img2 = document.getElementById("a2");
        img3 = document.getElementById("a3");
        img4 = document.getElementById("a4");

        if (results[0].label == "cat") {
            img1.src = "cat-lasering.gif";
            img2.src = "doge.jpg";
            img3.src = "cow3.jpg";
            img4.src = "lion4.jpg";
        }
        else if (results[0].label == "dog") {
            img1.src = "cat2.jpg";
            img2.src = "dog-walking.gif";
            img3.src = "cow3.jpg";
            img4.src = "lion4.jpg";
        }
        else if (results[0].label == "cow") {
            img1.src = "cat2.jpg";
            img2.src = "doge.jpg";
            img3.src = "cow-dancing";
            img4.src = "lion4.jpg";
        }
        else {
            img1.src = "cat2.jpg";
            img2.src = "doge.jpg";
            img3.src = "cow3.jpg";
            img4.src = "lion-running.gif";
        }

    }

}
