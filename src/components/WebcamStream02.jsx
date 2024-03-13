/* eslint-disable @next/next/no-img-element */
"use client";

import aiPrediction from "./aiPrediction.jsx";
import Image from "next/image.js";
import { Button } from "@/components/ui/button";
import React, { useEffect, useRef } from "react";

export default function WebcamStream02() {
  const ref = useRef();
  const constraints = {
    audio: false,
    video: {
      width: 1120,
      height: 630,
    },
  };

  return (
    <div>
      <video id="video" autoplay="true"></video>
      <canvas hidden ref={ref} width="224" height="224"></canvas>
      <Button onClick={useDrawImage}>Go</Button>
      <img hidden id="photo" width="224" height="224" alt="takenImage" />
      <ul id="predictionList"></ul>
    </div>
  );
}

function useDrawImage() {
  useEffect(() => {
    const ctx = ref.current.getContext("2d");
    ctx.fillStyle = "grey";
    ctx.fillRect(0, 0, 224, 224);
    let img = document.getElementById("photo");
    let data = ref.current.toDataURL("image/png");
    img.setAttribute("src", data);
    ctx.drawImage(video, 0, 49, 224, 126);
    console.log("canvas drawn");
    console.log(img);
    let prediction = aiPrediction(img);
    console.log(aiPrediction);
  }, []);
}
