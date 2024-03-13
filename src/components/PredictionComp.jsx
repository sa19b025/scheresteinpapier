"use client";
import React from "react";
import { ImageModel } from "react-teachable-machine";
export default function PredictionComp() {
  const [isDay, setIsDay] = React.useState(true);
  const [isNear, setIsNear] = React.useState(false);
  return (
    <div
      style={{
        backgroundColor: isDay ? "white" : "black",
        color: isDay ? "black" : "white",
        fontSize: isNear ? "1rem" : "4rem",
      }}
    >
      <ImageModel
        preview={false}
        size={200}
        interval={500}
        onPredict={(prediction) => {
          setIsDay(prediction[0].probability > 0.5);
        }}
        model_url="https://teachablemachine.withgoogle.com/models/qNic7uOOY/"
      ></ImageModel>

      <ImageModel
        preview={false}
        size={200}
        onPredict={(prediction) => {
          setIsNear(prediction[0].probability > 0.5);
        }}
        model_url="https://teachablemachine.withgoogle.com/models/jUuTCb6YD/"
      ></ImageModel>
    </div>
  );
}
