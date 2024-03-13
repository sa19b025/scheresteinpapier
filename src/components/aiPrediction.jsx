import * as tf from "@tensorflow/tfjs";
import * as tmImage from "@teachablemachine/image";

export default async function aiPrediction(image) {
  const modelPath = "/AI/model.json";
  const metadataPath = "/AI/metadata.json";
  let model = await tmImage.load(modelPath, metadataPath);
  const img = document.createElement("img");
  img.src = image;

  const data = predict(img, model);
  console.log(data);

  return data;
}

async function predict(image, model) {
  // predict can take in an image, video or canvas html element
  let prediction = await model.predict(image);
  let classPrediction = "";
  for (let i = 0; i < prediction.length && i < 3; i++) {
    // Ensure you don't exceed the prediction array length
    if (i > 0) classPrediction += ", "; // Adds a separator between predictions, except before the first one.
    classPrediction +=
      prediction[i].className + ": " + prediction[i].probability.toFixed(2);
  }
  return classPrediction;
}
