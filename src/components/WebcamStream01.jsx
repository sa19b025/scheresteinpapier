export default function video(){
const constraints = {
  audio: false,
  video: {
    width: 1120,
    height: 630,
  },
};
let maxPredictionVal = "";
let valueNPC = "";
let result = "";
let imgfilenamePlayer = "";
let imgfilenameComputer = "";

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
      document.getElementById("video").srcObject = stream;
      console.log("video ready");
    })
    .catch((error) => {
      console.log("Something went wrong! " + error.message);
    });
}
const canvas = document.getElementById("canvas");
const canvas2 = document.getElementById("canvas2");
const ctx = canvas.getContext("2d");
const ctx2 = canvas2.getContext("2d");

ctx.fillStyle = "grey";
ctx.fillRect(0, 0, 224, 224);
ctx2.fillStyle = "grey";
ctx2.fillRect(0, 0, 848, 477);

const snapshotButton = document.getElementById("snapshot");

console.log("added EventListener");

snapshotButton.addEventListener("click", function () {
  ctx.drawImage(video, 0, 49, 224, 126);
  ctx2.drawImage(video, 0, 0, 848, 477);
  console.log("canvas drawn");

  document.getElementById("break1").className = "dontShow";

  stopvideo();

  document.getElementById("video").className = "dontShow";
  document.getElementById("snapshot").className = "dontShow";
  document.getElementById("photo").className = "dontShow";
  document.getElementById("photo2").className = "show";
  document.getElementById("headlinePrediction").className = "show";

  let img = document.getElementById("photo");
  let img2 = document.getElementById("photo2");
  let data = canvas.toDataURL("image/png");
  img.setAttribute("src", data);
  let data2 = canvas2.toDataURL("image/png");
  img2.setAttribute("src", data2);

  img = document.getElementById("photo");

  console.log(img);
  console.log(img2);
  predict(img);},

  async function predict(img) {
    // const URL = "https://teachablemachine.withgoogle.com/models/CoWEt_sY5/";
    // Link zum Freigeben Version 2: https://teachablemachine.withgoogle.com/models/SIbkI-Nno/
    const URL = "https://teachablemachine.withgoogle.com/models/SIbkI-Nno/";

    let model;
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    model = await tmImage.load(modelURL, metadataURL);

    // predict can take in an image, video or canvas html element
    const prediction = await model.predict(img);

    console.log(prediction);

    const predictionList = document.getElementById("predictionList");
    let maxPercentage = 0;

    for (var i = 0; i < 3; i++) {
      const predictionPercentage = prediction[i].probability;
      if (maxPercentage < predictionPercentage) {
        maxPercentage = predictionPercentage;
        maxPredictionVal = prediction[i].className;
      }
      const predictionClassName = prediction[i].className;
      console.log(predictionClassName + " " + predictionPercentage * 100 + "%");
      const li = document.createElement("li");
      li.appendChild(
        document.createTextNode(
          predictionClassName +
            " " +
            Math.round(predictionPercentage * 10000) / 100 +
            "%"
        )
      );
      predictionList.appendChild(li);
      console.log(maxPredictionVal + " " + maxPercentage);
    }
  }
  function stopvideo(e) {
    var stream = video.srcObject;
    var tracks = stream.getTracks();

    for (var i = 0; i < tracks.length; i++) {
      var track = tracks[i];
      track.stop();
    }

    video.srcObject = null;
  }}